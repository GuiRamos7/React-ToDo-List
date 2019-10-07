import React, { useState } from "react";
import "./App.css";

import { MdAdd } from "react-icons/md";
import List from "./List";
import Create from "./Create";

function App() {
  const [list, setList] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [modalText, setModalText] = useState("");

  const createTask = () => {
    const itemCreate = {
      text: modalText,
      isChecked: false
    };
    setList([...list, itemCreate]);
    setAddModal(false);
    setModalText("");
  };

  const checkTask = index => {
    const newList = list.map((el, i) => {
      if(index === i) {
        return {
          text: el.text,
          isChecked: !el.isChecked
        }
      }
      return el;
    });

    setList(newList);

  };

  return (
    <div className="container">
      <div className="todo-container">
        <header>
          <h3>To-do List</h3>
          <button className="add" onClick={() => setAddModal(true)}>
            <MdAdd />
          </button>
        </header>
        <List listTodos={list} checkItem={index => checkTask(index)} />
        <Create
          modalText={modalText}
          handleText={e => setModalText(e)}
          handlerClose={() => setAddModal(false)}
          isOpen={addModal}
          createTask={createTask}
        />
      </div>
    </div>
  );
}

export default App;
