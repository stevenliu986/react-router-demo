import { HashRouter, Link } from "react-router-dom";
import styled from "styled-components";
import RouteView from "./router";
import routes from "./router/routes";

function App() {
  const Nav = styled.nav`
    margin: 50px auto;
    a {
      text-decoration: none;
      padding: 10px 25px;
      font-size: 32px;

      &:hover {
        color: lightblue;
        border-bottom: 2px solid #00a4ff;
      }
    }
  `;

  return (
    // 使用<HashRouter>将所有的内容包裹起来，开启hash路由
    // Link实现路由切换/跳转组件
    <HashRouter>
      {/* 导航部分 */}
      <Nav>
        <Link to="/a">A</Link>
        <Link to="/b">B</Link>
        <Link to="/c">C</Link>
      </Nav>

      {/* 路由容器：每一次页面加载或路由切换完毕，都会根据当前的哈希值和每一个Route进行匹配，
      将匹配到的组件放到容器中渲染 */}
      <div className="content">
        <RouteView routes={routes} />
      </div>
    </HashRouter>
  );
}

export default App;
