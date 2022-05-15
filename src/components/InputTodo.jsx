import React from "react";

export const InputTodo = (props) => {
  const { todoText, onCHange, onClick } = props;
  return (
    <div className="input-area">
      <input placeholder="TODOを入力" value={todoText} onChange={onCHange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
