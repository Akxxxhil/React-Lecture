

import React from "react";
import Todo from "./Todo";

function TodoItemstotal(props) {
  return (
    <>
      {props.todoItems.map((item, index) => (
        <Todo key={index} todoName={item.name} todoDate={item.dueDate} />
      ))}
    </>
  );
}

export default TodoItemstotal;