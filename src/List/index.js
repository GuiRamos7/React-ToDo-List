import React from "react";

import "./styles.css";
import Item from "../Item";

export default function List({ listTodos, checkItem }) {

  const listOfItems =
    listTodos.length >= 1 &&
    listTodos.map((el, i)=> (
      <Item
        key={el.text}
        text={el.text}
        isChecked={el.isChecked}
        onChange={() => checkItem(i)}
      />
    ));

  return <ul className="list">{listOfItems}</ul>;
}
