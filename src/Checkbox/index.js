import React from "react";
import PropTypes from 'prop-types';

import "./styles.css";

const Checkbox = ({ text, labelClassName, isChecked, onChange }) => {
  return (
    <>
      <label className={`label-styled ${labelClassName}`}>
        {text}
        <input onChange={onChange} checked={isChecked} type="checkbox" />
        <span class="checkmark" />
      </label>
    </>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string
};

export default Checkbox;
