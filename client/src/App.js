import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Memes from "./Components/Memes";
import SideBar from "./Components/SideBar";
import "./Styles/app.scss";
import CreateRoom from "./routes/CreateRoom";
import Room from "./routes/Room";
import React from "react";

// import { useEffect, useState } from "react";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/video" exact component={CreateRoom} />
          <Route path="/room/:roomID" component={Room} />
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
