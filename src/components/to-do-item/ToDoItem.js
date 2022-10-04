import classes from "./ToDoItem.module.css";
import {  useState } from "react";

const ToDoItem = ({ item, deletedItem }) => {
  const { toDoItem, id, completed } = item;

  const [status, setStatus] = useState(item);

 

  const checkedStatusHandler = () => {
    const changeChecked = (item.completed = !completed);
    setStatus({ ...item, completed: changeChecked });
  };

  

  return (
    <div className={classes["item-container"]}>
      <div className={classes.item}>
        <input
          type="checkbox"
          id={`status-${id}`}
          name={toDoItem}
          value={toDoItem}
          checked={completed}
          onChange={checkedStatusHandler}
        />
        <label htmlFor={`status-${id}`}>{toDoItem}</label>
      </div>
      <h5 onClick={() => deletedItem(id)}>remove</h5>
    </div>
  );
};

export default ToDoItem;
