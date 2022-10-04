import classes from "./SearchField.module.css";

const SearchField = ({
  searchField,
  searchHandler,
  isChecked,
  completedFilter,
}) => {
  return (
    <form className={classes["search-field-container"]}>
      <input
        className={classes["search-box"]}
        type={"text"}
        placeholder="Search to-do list"
        value={searchField}
        onChange={searchHandler}
      />
      <input
        className={classes["hide-completion-checkbox"]}
        type={"checkbox"}
        id={"checkedFilterSummary"}
        value={"checkedFilter"}
        name={"checkedFilter"}
        checked={isChecked}
        onChange={completedFilter}
      />{" "}
      <label>Hide completed</label>
    </form>
  );
};

export default SearchField;
