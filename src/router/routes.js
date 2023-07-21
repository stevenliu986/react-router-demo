/* 
  配置路由表: 形式为一个数组。该数组中的每一项就是每一个需要配置的路由规则。
    redirect: 此配置是重定向
    from: 来源的地址
    to: 重定向的地址
    exact：是否精准匹配
    path: 匹配的路径
    component：匹配的组件
    name: 路由名称（命名路由）
    meta: {} 路由元信息 - 包含当前路由的一些信息，当路由匹配后，可以用这些信息做一些事情
    children：[] 子路由
*/

import A from "../views/A";
import B from "../views/B";
import C from "../views/C";
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
    component: B,
    meta: {},
  },
  {
    path: "/c",
    name: "c",
    component: C,
    meta: {},
  },
  {
    redirect: true,
    to: "/",
  },
];
export default routes;
