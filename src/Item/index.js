import React from "react";

import CheckBox from '../Checkbox';

export default function Item({ text, isChecked, onChange }) {
  return (
    <>
      <li className={`item ${isChecked && 'item-cheked'}`}>
        <CheckBox isChecked={isChecked} labelClassName={isChecked && 'check-item'} onChange={onChange} text={text}/>

        {/* <label className={isChecked && 'check-item'} htmlFor={text}>{text}</label> */}
        {/* <input
          id={text}
          type="checkbox"
          onChange={onChange}
          checked={isChecked}
        /> */}
      </li>
    </>
  );
}
