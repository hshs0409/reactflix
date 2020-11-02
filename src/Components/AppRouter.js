import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "Routes/Home/HomePresenter";
import Search from "Routes/Search/SearchPresenter";
import TV from "Routes/TV/TVPresenter";
import Detail from "Routes/Detail/DetailPresenter";
import Header from "./Header";

function AppRouter() {
  return (
    <>
      <Router>
        <>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tv" exact component={TV} />
            <Route path="/search" component={Search} />
            <Route path="/detail" component={Detail} />
            <Redirect from="*" to="/" />
          </Switch>
        </>
      </Router>
    </>
  );
}

export default AppRouter;
