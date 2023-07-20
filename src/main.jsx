import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// 使用antd组件库
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
);
