import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  // make input a controller element
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  // on add, pass the inputted text to the app and clear
  function handleAdd() {
    const addedText = inputText;
    props.onAdd(addedText);
    setInputText("");
  }

  return (
    <div className="form">
      <input type="text" value={inputText} onChange={handleChange} />
      <button onClick={handleAdd}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
