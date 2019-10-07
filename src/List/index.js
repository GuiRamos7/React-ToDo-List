import React from "react";
import PropTypes from 'prop-types';

import "./styles.css";
import Item from "../Item";
const List = ({ listTodos, checkItem }) => {

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

List.propTypes = {
  listTodos: PropTypes.array,
  checkItem: PropTypes.func
};

export default List;