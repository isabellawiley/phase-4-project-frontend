import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Home from "./Home";
import Header from "./Header";
import { useEffect, useState } from 'react';
import Profile from './Profile';
import Login from './Login';
import SignUp from './SignUp';
import { createGlobalStyle } from "styled-components"

const GlobalStyle= createGlobalStyle`
  /* body {
    background-color: #699e5c
  } */
  

`

function App() {

  // const [nerds, setNerds] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [locations, setLocations] = useState([]);
  const history = useHistory();
  const [currentNerd, setCurrentNerd] = useState({});
  
  useEffect(() => {
    const loggedInNerd = JSON.parse(localStorage.getItem("loggedNerd"));
    console.log(loggedInNerd)
    if(localStorage.getItem("loggedNerd")){
      setCurrentNerd(loggedInNerd);
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

  // useEffect(() => {
  //   fetch('http://localhost:3000/nerds', {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${localStorage.token}`
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(nerds => setNerds(nerds))
  // }, [])

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

  console.log(currentNerd)

  // if(currentNerd){
  //   return <div>{currentNerd.name} is logged in</div>
  // }
  
  return (
    <div className="App">
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
      </Switch>
    </div>
  );
}

export default App;
