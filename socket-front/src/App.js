import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Messages from "./pages/Messages";
import Register from "./pages/Register";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/user/:memberId" component={Messages} />
          <Route path="/:groupId" component={Messages} />
          <Route path="/" component={Messages} />
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App;
