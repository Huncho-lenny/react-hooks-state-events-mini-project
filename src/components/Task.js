import React from "react";

function Task({text, category, onDelete}) {
  function handleDelete() {
    if(onDelete)
      onDelete(text);
    
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleDelete} className="delete">X</button>
    </div>
  );
}

export default Task;