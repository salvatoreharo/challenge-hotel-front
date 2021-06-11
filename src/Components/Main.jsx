import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Users from "./Users";
import About from "./About";

import Hotels from "./Hotels";

const MainSection = styled.main`
    padding: 10px 20px;
    a {
        color: #000;
    }
    a:hover {
        color: #fff;
    }
`;
const Main = () => (
    <MainSection>
        <Switch>
            <Route exact path="/" component={Hotels} />
            <Route path="/users" component={Users} />
            <Route path="/about" component={About} />
        </Switch>
    </MainSection>
);

export default Main;
