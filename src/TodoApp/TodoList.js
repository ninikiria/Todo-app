import React, { useEffect, useRef, useState } from "react";
import "../index.css";

const ItemsListTodo = [
  {
    id: "18372920",
    title: "Add New Task 👇🏼",
    completed: false,
  },
];

const TodoList = () => {
  const [todos, setTodos] = useState(ItemsListTodo);
  const [taskValue, setTaskValue] = useState("");
  const taskInputRef = useRef()

  useEffect(() => {
    taskInputRef.current.focus();
  }, [])


  function onItemChange(itemClicked) {
    const newListItem = todos.map((item) => {
      if (item.id === itemClicked.id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setTodos(newListItem);
  }

  function onAddNewTask(e) {
    e.preventDefault();
    const newTask = [
      ...todos,
      {
        id: Date.now(),
        title: taskValue,
        completed: false,
      },
    ];
    setTodos(newTask);
    setTaskValue('')
  }

  return (
    <>
    {/* Task container section */}
      <div className="task_container">
        <form action="" onSubmit={onAddNewTask}>
          <input
            className="task_input"
            type="text"
            maxLength="35"
            placeholder="Add Task ..."
            value={taskValue}
            onChange={(e) => setTaskValue(e.target.value)}
            ref={taskInputRef}
          />
        </form>
      </div>
      {/* New added task section container */}
      <div className="container">
        <ul>
          {todos.map((item) => (
            <div className="box">
              <input
                className="form_checkbox"
                type="checkbox"
                checked={item.completed}
                onChange={() => onItemChange(item)}
              />

              <li key={item.id} className={item.completed ? "completed" : ""}>
                <div className="list_content ">{item.title}</div>
              </li>

              <button className="btn_delete">Delete</button>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
