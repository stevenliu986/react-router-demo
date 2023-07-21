import { lazy } from "react";
// A组件的二级路由表

const aRoutes = [
  { redirect: true, from: "/a", to: "/a/a1", exact: true },
  {
    path: "/a/a1",
    component: lazy(() =>
      // 添加 “/* webpackChunkName: "AChild"*/” 可以使这些组件一起打包到一个JS里面。AChild是打包后的名称。
      import(/* webpackChunkName: "AChild"*/ "../views/a/A1")
    ),
    name: "a-a1",
    meta: {},
  },
  {
    path: "/a/a1",
    component: lazy(() =>
      import(/* webpackChunkName: "AChild"*/ "../views/a/A2")
    ),
    name: "a-a2",
    meta: {},
  },
  {
    path: "/a/a1",
    component: lazy(() =>
      import(/* webpackChunkName: "AChild"*/ "../views/a/A3")
    ),
    name: "a-a3",
    meta: {},
  },
];
export default aRoutes;
