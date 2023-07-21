import qs from "qs";
import React from "react";
import { useLocation } from "react-router-dom";
const C = () => {
  let location = useLocation();
  console.log(location.search); // ?id=100&name=hello
  let query = qs.parse(location.search.substring(1));
  console.log(query); // {id:100, name:hello}
  let { id, name } = query;
  console.log(id, name); // 100, hello

  // 也可以基于URLSearchParams方法来获取
  let usp = new URLSearchParams(location.search);
  console.log(usp.get("id"), usp.get("name")); // 100 hello
  return <div className="box">C组件的内容</div>;
};

export default C;
