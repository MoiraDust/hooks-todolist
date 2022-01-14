import { React, useState } from "react";
import "./header.scss";

export default function Header(props) {
  const { openInput } = props;
  return (
    <div className="header">
      <h1>Todo List</h1>
      {/* class component: onClick={this.openInput} */}
      <span className="icon" onClick={openInput}>
        &#43;
      </span>
    </div>
  );
}
