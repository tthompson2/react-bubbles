import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import BubbleAuth from "./components/BubbleAuth";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/PrivateRoute";

import { connect}  from "react-redux";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <Switch>
          <PrivateRoute exact path="/protected" component={BubbleAuth}/>
          <PrivateRoute path="/autheticated" component={BubblePage}/>
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return { state };
}

export default connect (mapStateToProps, {} )(App);
