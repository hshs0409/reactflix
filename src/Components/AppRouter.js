import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "Routes/Home";
import Search from "Routes/Search";
import TV from "Routes/TV";
import Detail from "Routes/Detail";

function AppRouter() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tv" exact component={TV} />
          <Route path="/tv/popular" render={() => <h1>whyNot</h1>} />
          <Route path="/search" component={Search} />
          <Route path="/detail" component={Detail} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default AppRouter;
