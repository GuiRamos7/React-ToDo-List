import React from "react";

import "./styles.css";

export default function Checkbox({ text, labelClassName, isChecked, onChange }) {
  return (
    <>
      <label className={`label-styled ${labelClassName}`}>
        {text}
        <input onChange={onChange} checked={isChecked} type="checkbox" />
        <span  class="checkmark" />
      </label>
    </>
  );
}
