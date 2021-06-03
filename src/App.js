import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Home from "./Home";
import Header from "./Header";
import { useEffect, useState } from 'react';
import Profile from './Profile';
import Login from './Login';
import SignUp from './SignUp';

function App() {

  // const [nerds, setNerds] = useState([]);
  const [characters, setCharacters] = useState([]);
  const history = useHistory();
  const [currentNerd, setCurrentNerd] = useState(null);
  const [currentNerdId, setCurrentNerdId] = useState(null);

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
    fetch(`http://localhost:3000/nerds/${currentNerdId}`)
    .then(res => res.json())
    .then((nerd) => setCurrentNerd(nerd))
  },[currentNerdId])

  function logout(){
    localStorage.clear()
    history.push("/login")
    setCurrentNerd(null)
  }

  console.log(currentNerd)
  
  return (
    <div className="App">
      <Header logout={logout} />
      <Switch>
        <Route exact path="/">
          <Home characters={characters} />
        </Route>
        <Route exact path="/profile">
          <Profile currentNerd={currentNerd} />
        </Route>
        <Route exact path="/login" >
          <Login setCurrentNerdId={setCurrentNerdId} />
        </Route>
        <Route exact path="/signup" >
          <SignUp setCurrentNerd={setCurrentNerd} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
