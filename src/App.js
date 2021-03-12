
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import TeamDetail from "./components/TeamDetail/TeamDetail";

function App() {
  return (
    <div >
      <Router>
        <div className="text-center">
          <ul>
            <li >
              <Link to="/">Home</Link>
            </li>

          </ul>




          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/post/:idTeam">
              <TeamDetail></TeamDetail>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
