import classes from "./NewToDo.module.css";
import { useState } from "react";

const NewToDo = ({liftedItem}) => {
  const [newItem, setNewItem] = useState("");

  const addNewItem = (event) => {
    setNewItem(event.target.value);
  };

  const newItemHandler = (event) => {
    event.preventDefault();
    
    liftedItem(newItem);
    setNewItem("");
  };

 

  return (
    <form className={classes.newToDo} onSubmit={newItemHandler}>
      <input
        type={"text"}
        placeholder={"Enter New todo"}
        value={newItem}
        onChange={addNewItem}
      />
      <button type={"submit"}>Submit</button>
    </form>
  );
};

export default NewToDo;
