import React from "react";
import { Switch, Route } from "react-router-dom";
import Hotels from "./Hotels";
import About from "./About";

const Main = () => (
    <>
        <Switch>
            <Route exact path="/" component={Hotels} />
            <Route path="/about" component={About} />
        </Switch>
    </>
);

export default Main;
