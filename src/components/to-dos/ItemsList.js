import NewToDo from "../new-to-do/NewToDo";
import ToDoItem from "../to-do-item/ToDoItem";
import classes from "./ItemsList.module.css";
import { useState } from "react";
import SearchField from "../search-field/SearchField";

const TODOLIST = [
  {
    id: 1,
    completed: false,
    toDoItem: "Complete this hands-on exercise",
  },
  {
    id: 2,
    completed: false,
    toDoItem: "See a movie this weekend",
  },
  {
    id: 3,
    completed: false,
    toDoItem: "Renew office rent",
  },
  {
    id: 4,
    completed: false,
    toDoItem: "Move this list to firebase",
  },
];

const ItemsList = () => {
  const [toDoItems, setToDoItems] = useState(TODOLIST);
  const [searchField, setSearchField] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [getIndex, setGetIndex] = useState({});

  const deletedItem = (position) => {
    toDoItems.map((toDoItem, index) => {
      const { id } = toDoItem;
      if (id === position) {
        setGetIndex({ ...getIndex, newIndex: (getIndex.newIndex = index) });

        const { newIndex } = getIndex;

        const updatedToDoItems = toDoItems;
        updatedToDoItems.splice(newIndex, 1);

        return setToDoItems(updatedToDoItems);
      }
    });
  };

  const searchHandler = (e) => {
    setSearchField(e.target.value);
  };

  const updateToDoArray = (newItem) => {
    setToDoItems([
      { id: Math.random(), completed: false, toDoItem: newItem },
      ...toDoItems,
    ]);
  };

  const searchedList = toDoItems.filter((item) => {
    const { toDoItem } = item;
    return toDoItem.toLowerCase().includes(searchField.toLowerCase());
  });

  const filteredListDisplay = searchedList.map((item) => {
    return <ToDoItem key={item.id} item={item} deletedItem={deletedItem} />;
  });

  const completedFilter = () => {
    setIsChecked(!isChecked);
  };

  const hideCompletedList = toDoItems.filter(({ completed }) => {
    return completed === false;
  });

  const hideCompletedListDisplay = hideCompletedList.map((item) => {
    return <ToDoItem key={item.id} item={item} deletedItem={deletedItem} />;
  });

  return (
    <>
      <SearchField
        searchField={searchField}
        searchHandler={searchHandler}
        toDoItems={toDoItems}
        isChecked={isChecked}
        completedFilter={completedFilter}
      />
      <div className={classes["items-list-container"]}>
        {isChecked === true ? (
          <div>
            <h2>You have {hideCompletedList.length} todos left</h2>
            {hideCompletedListDisplay}
          </div>
        ) : hideCompletedList.length === 0 ? (
          <h2>You have not added any new todos yet</h2>
        ) : (
          <div>
            <h2>You have {toDoItems.length} todos left</h2>
            {filteredListDisplay}
          </div>
        )}

        <NewToDo liftedItem={updateToDoArray} />
      </div>
    </>
  );
};

export default ItemsList;
