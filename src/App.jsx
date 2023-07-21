import { HashRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import A from "./views/A";
import B from "./views/B";
import C from "./views/C";
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
        <Link to="/">A</Link>
        <Link to="/b">B</Link>
        <Link to="/c">C</Link>
      </Nav>

      {/* 路由容器：每一次页面加载或路由切换完毕，都会根据当前的哈希值和每一个Route进行匹配，
      将匹配到的组件放到容器中渲染 */}
      <div className="content">
        {/* Switch确保路由中只要有一个匹配，则不再向下匹配。exact：设置匹配模式为精确匹配 */}
        <Switch>
          <Route exact path="/" component={A} />
          <Route path="/b" component={B} />
          <Route path="/c" component={C} />
          <Route
            path="/d"
            render={() => {
              /* 
                当路由匹配后，先执行render函数，返回的就是我们要渲染的组件，在此函数中可以写一些逻辑，
                如：登录状态检测等 
              */
              let isLogin = true;
              if (isLogin) {
                return <C />;
              }
              return <Redirect to="/login" />;
            }}
          />
          {/* path设置为“*”或不写表示上述都不匹配，则执行这个规则
          <Route path="*" component={404页面} /> 
          <Redirect from="" to="/" exact/>
          from: 从哪个地址来，to：重定向的地址，exact：开启精确匹配
          */}
          <Redirect />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
