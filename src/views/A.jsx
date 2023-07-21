import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import RouterView from "../router";
import routes from "../router/aRoutes";

const A1Box = styled.div`
  display: flex;
  .menu {
    color: #000;
    a {
      display: block;
    }
  }

  .content {
    width: 300px;
    height: 300px;
    background-color: pink;
    margin-left: 100px;
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
        <RouterView routes={routes} />
      </div>
    </A1Box>
  );
};

export default A;
