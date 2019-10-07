import React from "react";
import PropTypes from 'prop-types';

import CheckBox from "../Checkbox";

const Item = ({ text, isChecked, onChange }) => {
  return (
    <>
      <li className={`item ${isChecked && "item-cheked"}`}>
        <CheckBox
          isChecked={isChecked}
          labelClassName={isChecked && "check-item"}
          onChange={onChange}
          text={text}
        />
      </li>
    </>
  );
}

Item.propTypes = {
  text: PropTypes.string,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func
};

export default Item;