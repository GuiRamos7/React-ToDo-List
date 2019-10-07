import React from "react";
import PropTypes from 'prop-types';
import { MdCheck, MdClose } from "react-icons/md";
import "./styles.css";

const Create = ({
  isOpen,
  handlerClose,
  handleText,
  modalText,
  createTask
}) => {
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

Create.propTypes = {
  isOpen: PropTypes.bool,
  handlerClose: PropTypes.func,
  handleText: PropTypes.func,
  createTask: PropTypes.func,
  modalText: PropTypes.string
};

export default Create;