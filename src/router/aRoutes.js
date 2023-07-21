import { lazy } from "react";
// A组件的二级路由表

const aRoutes = [
  { redirect: true, from: "/a", to: "/a/a1", exact: true },
  {
    path: "/a/a1",
    component: lazy(() => import("../views/a/A1")),
    name: "a-a1",
    meta: {},
  },
  {
    path: "/a/a1",
    component: lazy(() => import("../views/a/A2")),
    name: "a-a2",
    meta: {},
  },
  {
    path: "/a/a1",
    component: lazy(() => import("../views/a/A3")),
    name: "a-a3",
    meta: {},
  },
];
export default aRoutes;
