import React from "react";
import "./index.scss";
import Modal from "../";
import utils from "../../../libs/utils.js";

export default function CheckModal(props) {
  const { isShowCheckModal, data, closeModal } = props;
  return (
    <>
      <Modal isShowModal={isShowCheckModal} modalTitle="View the item">
        <p className="topic">Time:{utils.formatDateTime(data.id)}</p>
        <p className="topic">Content:{data.content}</p>
        <p className="topic">
          Status:{data.complete ? "Finished" : "Unfinished"}
        </p>
        <div className="button">
          <button className="btn btn-primary" onClick={closeModal}>
            Close
          </button>
        </div>
      </Modal>
    </>
  );
}
