import React from "react";
import { MdCheck, MdClose } from "react-icons/md";

import "./styles.css";

export default function Create({
  isOpen,
  handlerClose,
  handleText,
  modalText,
  createTask
}) {
  return (
    <div
      className={`create-container ${
        isOpen ? "create-container--open" : "create-container--close"
      } `}
    >
      <input
        type="text"
        value={modalText}
        onChange={e => handleText(e.target.value)}
      />
      <button onClick={createTask}>
        <MdCheck />
      </button>
      <button onClick={handlerClose}>
        <MdClose />
      </button>
    </div>
  );
}
