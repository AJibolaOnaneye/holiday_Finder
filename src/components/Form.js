import React from "react";

const Form = (props) => {
  return (
    <div>
      <form className='form' >
        <label  for={props.for}></label>
        <select className='select'  id={props.id} name={props.name}>
         <option value="" disabled selected> {props.disabled} </option>
          <option value={props.value1}>{props.value1name}</option>
          <option value={props.value2}>{props.value2name}</option>
          <option value={props.value3}>{props.value3name}</option>
          <option value={props.value4}>{props.value4name}</option>
        </select>
      </form>
    </div>
  );
};

export default Form;
