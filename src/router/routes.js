import { lazy } from "react";
import A from "../views/A";
import aRoutes from "./aRoutes";

// 一级路由表
const routes = [
  {
    redirect: true,
    from: "/",
    to: "/a",
    exact: true,
  },
  {
    path: "/a",
    name: "a",
    component: A,
    meta: {},
    children: aRoutes,
  },
  {
    path: "/b",
    name: "b",
    // 在这里使用lazy方法加载组件
    component: lazy(() => import("../views/B")),
    meta: {},
  },
  {
    path: "/c",
    name: "c",
    // 在这里使用lazy方法加载组件
    component: lazy(() => import("../views/C")),
    meta: {},
  },
  {
    redirect: true,
    to: "/",
  },
];
export default routes;
