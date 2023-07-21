import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

// 调用组件是时候，基于属性传递路由表进来。然后根据路由表，动态设定路由的匹配规则
const RouteView = (props) => {
  let { routes } = props;
  return (
    <Switch>
      {/* 循环设置路由规则 */}
      {routes.map((item, index) => {
        // 将component重命名为Component就可以进行渲染了
        let { redirect, from, to, exact, path, component: Component } = item,
          config = {};
        if (redirect) {
          // 重定向规则
          return <Redirect key={index} />;
        }
        // 正常匹配规则
        config = { path };
        if (exact) {
          config.exact = true;
        }
        return (
          <Route
            key={index}
            path={path}
            {...config}
            render={() => {
              // 统一基于render函数进行处理，当路由匹配后，可以在这里做一些事情（权限校验，导航守卫等）
              return (
                // 使用懒加载时，需要用<Suspense>将懒加载的组件包裹起来
                // Suspense.fallback：在异步加载的组件没有处理完成之前，先展示的Loading效果
                <Suspense fallback={<>正在处理中......</>}>
                  <Component />
                </Suspense>
              );
            }}
          />
        );
      })}
    </Switch>
  );
};

export default RouteView;
