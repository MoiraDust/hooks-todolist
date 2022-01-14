import React, { useRef } from "react";
import "./index.scss";
import Modal from "../";
import utils from "../../../libs/utils.js";

export default function EditModal(props) {
  const { isShowEditModal, data, submitEdit } = props,
    inputRef = useRef(),
    checkRef = useRef();
  const formatNewData = () => {
    const value = inputRef.current.value;
    if (value.length === 0) {
      inputRef.current.value = data.content;
      return;
    }
    const newData = {
      id: new Date().getTime(),
      content: value,
      complete: checkRef.current.checked,
    };
    submitEdit(newData, data.id);
  };
  return (
    <Modal isShowModal={isShowEditModal} modalTitle="Edit the item">
      <p className="topic">Time:{utils.formatDateTime(data.id)}</p>
      <p className="topic">
        <textarea
          ref={inputRef}
          defaultValue={data.content}
          className="text-area"
        ></textarea>
      </p>
      <p className="topic">
        Status:
        <input
          type="checkbox"
          defaultChecked={data.complete ? true : false}
          ref={checkRef}
        />
      </p>
      <button className="btn btn-primary" onClick={formatNewData}>
        Submit
      </button>
    </Modal>
  );
}
