import React, { useEffect, useRef, useState } from "react";
import "../index.css";

const ItemsListTodo = [];

const TodoList = () => {
  const [todos, setTodos] = useState(ItemsListTodo);
  const [taskValue, setTaskValue] = useState("");
  const taskInputRef = useRef();

  useEffect(() => {
    taskInputRef.current.focus();
  }, []);

  // click mark input
  function onItemChange(itemIdClicked) {
    const newListItem = todos.map((item) => {
      if (item.id === itemIdClicked.id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setTodos(newListItem);
  }

  // new task function
  function onAddNewTask(e) {
    e.preventDefault();
    const newTaskAdd = [
   ...todos,
      {
        id: Date.now(),
        title: taskValue,
        completed: false,
      }, 
      
    ];
    setTodos(newTaskAdd);
    setTaskValue("");
  }

  // delete function
function onItemDelete(idItem) {
setTodos(todos.filter(item => item.id !== idItem));
// eslint-disable-next-line no-undef
setTodos(newTaskAdd);
}

const totalTask = todos.length;
const completedTask = todos.filter(item => item.completed).length
const UnfinishedTask = todos.filter(item => !item.completed).length
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
      <div className="quantity_task">
          <h3>Total: {totalTask} </h3>
         <h3>Complete: {completedTask} </h3>
         <h3>Unfinished: {UnfinishedTask}</h3>
      </div>
       
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

              <button
                className="btn_delete"
                onClick={() => onItemDelete(item.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
