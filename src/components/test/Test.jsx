import React from "react";

export default function Test(props) {
  const { title, changeTitle } = props;
  return (
    <div>
      <>
        <h1>{title}</h1>
        {/*  changeTitle() 的意思是调用函数的返回值。
        这里的意思是吧changeTitle()的值返回."third title"是参数,传给App中的changeTitle方法
        在类组件中写事件函数除非有参数，一般不会带括号 */}
        <button onClick={() => changeTitle("third title")}>
          Click to change title
        </button>
      </>
    </div>
  );
}
