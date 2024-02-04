import React from "react";
import Button from "./Button";

function TodoItem(props) {
  const { id, title, status, handleStatus, deleteTodo } = props;

  return (
    <div
      key={id}
      style={{
        textAlign: "center",
        padding: "20px",
        border: "1px solid red",
        borderRadius: "8px",
      }}
    >
      <p>{title}</p>
      <p>{status ? "Completed" : "Not Completed"}</p>
      <Button onClick={() => handleStatus(id)} title={"Toggle"} />
      <Button onClick={() => deleteTodo(id)} title={"Delete"} />
    </div>
  );
}

export default TodoItem;
