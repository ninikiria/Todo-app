import React from "react";
import "../index.css";

const ItemsListTodo = [
  {
    id: 1,
    title: "lorem 1 ",
    completed: true,
  },
  {
    id: 2,
    title: "lorem 1",
    completed: false,
  },
  {
    id: 3,
    title: "lorem 1",
    completed: false,
  },
  {
    id: 4,
    title: "lorem 1",
    completed: false,
  },
];
const TodoList = () => {

 function onItemChange(item) {
  console.log(item)
 }


  return (
    <>
      <div className="container">
        <ul>
          {ItemsListTodo.map((item) => (
            <div className="box">

              <input 
              className="form_checkbox"
              type="checkbox"
              checked={item.completed}
              onChange={() => onItemChange(item)} />

              <li key={item.id}  className={item.completed ? "completed" : ""}>
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
