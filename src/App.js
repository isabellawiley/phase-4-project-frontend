import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from "./Home";
import Header from "./Header";
import { useEffect, useState } from 'react';
import Profile from './Profile';

function App() {

  const [nerds, setNerds] = useState([]);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/characters')
    .then(res => res.json())
    .then(characters => setCharacters(characters))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/nerds')
    .then(res => res.json())
    .then(nerds => setNerds(nerds))
  }, [])

  
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home characters={characters} />
        </Route>
        <Route exact path="/nerds/:id">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
