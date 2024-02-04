import React from "react";
import Button from "./Button";
import TodoItem from "./TodoItem";

function Todo() {
  const [text, setText] = React.useState("");
  const [todo, setTodo] = React.useState([]);

  const changeHandle = (e) => {
    setText(e.target.value);
  };

  const changeClick = () => {
    const obj = { id: Date.now() + Math.random(), title: text, status: false };
    setTodo([...todo, obj]);
    setText("");
  };

  const handleStatus = (id) => {
    const updatedTodos = todo.map((e) =>
      e.id === id ? { ...e, status: !e.status } : e
    );
    setTodo(updatedTodos);
  };

  const deleteTodo = (id) => {
    const deletedTodos = todo.filter((e) => e.id !== id);
    setTodo(deletedTodos);
  };

  return (
    <div>
      <div>
        <input
          placeholder="input todo item"
          aria-required={true}
          value={text}
          onChange={changeHandle}
        />
        <Button onClick={changeClick} title={"Add Todo"} />
      </div>
      <ul>
        {todo.map((e) => (
          <li key={e.id}>
            <TodoItem
              id={e.id}
              title={e.title}
              status={e.status}
              handleStatus={handleStatus}
              deleteTodo={deleteTodo}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
