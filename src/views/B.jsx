import qs from "qs";
import React from "react";

// 使用react-router-dom提供的hooks函数来获取history, location和match三个参数
import { useHistory } from "react-router-dom";

const B = () => {
  let history = useHistory();
  return (
    <div className="box">
      B组件的内容
      <button
        onClick={() => {
          // 传参方案一：问号传参，传递的信息会出现在URL上，不安全且有长度限制
          // history.push("?id=100&username=helloworld");
          history.push({
            pathname: "/c",
            //search存储的就是问号传参信息，要求是urlencoded字符串
            search: qs.stringify({
              id: "100",
              name: "helloworld",
            }),
          });
        }}
      >
        按键
      </button>
    </div>
  );
};

export default B;
