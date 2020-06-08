import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./view/login/Login";
import Admin from "./view/admin/Admin";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Admin} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
