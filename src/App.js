import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Memes from "./Components/Memes";
import SideBar from "./Components/SideBar";
import "./Styles/app.scss";
// import { useEffect, useState } from "react";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <SideBar />
            <Memes />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
