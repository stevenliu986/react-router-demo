// A组件的二级路由表
import A1 from "../views/a/A1";
import A2 from "../views/a/A2";
import A3 from "../views/a/A3";

const aRoutes = [
  { redirect: true, from: "/a", to: "/a/a1", exact: true },
  { path: "/a/a1", component: A1, name: "a-a1", meta: {} },
  { path: "/a/a1", component: A2, name: "a-a2", meta: {} },
  { path: "/a/a1", component: A3, name: "a-a3", meta: {} },
];
export default aRoutes;
