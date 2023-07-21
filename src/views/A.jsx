import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import A1 from "./a/A1";
import A2 from "./a/A2";
import A3 from "./a/A3";

const A1Box = styled.div`
  display: flex;
  .menu {
    color: #000;
    a {
      display: block;
    }
  }
`;

const A = () => {
  return (
    <A1Box>
      <div className="menu">
        <Link to="/a/a1">A1</Link>
        <Link to="/a/a2">A2</Link>
        <Link to="/a/a3">A3</Link>
      </div>
      <div className="content">
        <Switch>
          <Route exact path="/a/a1" component={A1} />
          <Route path="/a/a2" component={A2} />
          <Route path="/a/a3" component={A3} />
        </Switch>
      </div>
    </A1Box>
  );
};

export default A;
