import React from "react";
import "./index.scss";

export default function Modal(props) {
  const { isShowModal, modalTitle, children } = props;

  return (
    <>
      {isShowModal ? (
        <div className="modal">
          <div className="inner">
            <div className="m-header">{modalTitle}</div>
            <div className="content">{children}</div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

/**
 * 插槽Slots:写一个组件，双标签，双标签中进行内容填充。本页面中的children就是插槽中的内容物
 * <Modal isShowModal={} modalTitle={}>
 * <p>...<h1>....
 * </Modal>
 */
