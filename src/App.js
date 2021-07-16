import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Home from "./Home";
import Header from "./Header";
import { useEffect, useState } from 'react';
import Profile from './Profile';
import Login from './Login';
import SignUp from './SignUp';
import { createGlobalStyle } from "styled-components"
import Leaderboard from './Leaderboard';

const GlobalStyle= createGlobalStyle`
  /* body {
    background-color: #504a4a;
  } */

  

`

function App() {

  const [allNerds, setAllNerds] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [locations, setLocations] = useState([]);
  const history = useHistory();
  const [currentNerd, setCurrentNerd] = useState({});
  console.log(currentNerd)
  console.log(allNerds)
  
  useEffect(() => {
    const loggedInNerd = JSON.parse(localStorage.getItem("loggedNerd"));
    console.log(loggedInNerd)
    if(loggedInNerd){
      fetch(`http://localhost:3000/nerds/${loggedInNerd.id}`)
      .then(res => res.json())
      .then((nerd) => {
        setCurrentNerd(nerd);
      })
    }
    else {
      history.push("/login");
    }
  },[])

  useEffect(() => {
    fetch('http://localhost:3000/characters', {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then(characters => {
      setCharacters(characters)
    })
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/nerds', {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then(nerds => setAllNerds(nerds))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/locations', {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then(locations => setLocations(locations))
  }, [])

  function logout(){
    localStorage.clear()
    history.push("/login")
    setCurrentNerd({})
  }
  
  return (
    <div className="App">
      <GlobalStyle />
      <Header logout={logout} />
      <Switch>
        <Route exact path="/">
          <Home characters={characters} currentNerd={currentNerd} locations={locations} />
        </Route>
        <Route exact path="/profile">
          <Profile currentNerd={currentNerd} setCurrentNerd={setCurrentNerd} logout={logout} />
        </Route>
        <Route exact path="/login" >
          <Login setCurrentNerd={setCurrentNerd} />
        </Route>
        <Route exact path="/signup" >
          <SignUp setCurrentNerd={setCurrentNerd} />
        </Route>
        <Route exact path="/leaderboard">
          <Leaderboard allNerds={allNerds} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
