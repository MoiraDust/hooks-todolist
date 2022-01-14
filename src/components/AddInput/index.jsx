import React, { useRef } from "react";
import "./index.scss";

export default function AddInput(props) {
  const { isInput, addItem } = props;
  const inputRef = useRef();

  const submitValue = (e) => {
    //   save value from input
    const inputValue = inputRef.current.value;
    if (inputValue.length === 0) {
      return;
    }
    // console.log(inputValue);
    // pass value to addItem
    addItem(inputValue);
    // clear value
    inputRef.current.value = "";
  };
  return (
    <>
      {isInput ? (
        <div className="input-wrapper">
          <input type="text" placeholder="Please Input Items" ref={inputRef} />
          <button className="btn btn-primary" onClick={submitValue}>
            Add Item
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
