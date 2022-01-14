import React from "react";
import "./index.scss";

export default function TodoItem(props) {
  const { data, openCheckModal, openEditModal, completeItem, removeItem } =
    props;

  return (
    <li className="item-wrapper">
      <div className="check-box">
        <input
          type="checkbox"
          checked={data.complete}
          onChange={() => {
            completeItem(data.id);
          }}
        />
      </div>
      <span
        className="content"
        style={{ textDecoration: data.complete ? "line-through" : "none" }}
      >
        {data.content}
      </span>
      <div className="btn-group">
        <button
          className="btn btn-primary"
          onClick={() => {
            // id 要传回给父组件
            openCheckModal(data.id);
          }}
        >
          View
        </button>
        <button
          className="btn btn-warning"
          onClick={() => {
            openEditModal(data.id);
          }}
        >
          Edit
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            removeItem(data.id);
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
