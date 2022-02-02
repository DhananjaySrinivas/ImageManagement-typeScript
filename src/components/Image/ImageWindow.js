import { useState } from "react";
import Modal from "../UI/Modal";
import classes from "./ImageWindow.module.css";
import Search from "./Search";

const AddImageWindow = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchClickHandler = (event) => {
    event.preventDefault();
  };

  const SearchEnteredHandler = (e) => {
    e.preventDefault();
    let value = e.target.value;
    setSearchTerm(value);
  };

  return (
    <Modal onClose={props.onClose}>
      <h3>Select Image</h3>
      <p>Search and select an image</p>
      <div className={classes.searchBarContainer}>
        <div className={classes.searchbar}>
          <i
            className="fa fa-search"
            style={{
              fontSize: "16px",
              marginRight: "10px",
              marginLeft: "10px",
              color: "lightgray",
            }}
          />
          <input
            onChange={SearchEnteredHandler}
            type="text"
            placeholder="Search Media"
            className={classes.bar}
          />
        </div>
        <div>
          <button className={classes.searchButton} onClick={searchClickHandler}>
            Search
          </button>

          <Search searchTerm={searchTerm} />
        </div>
      </div>
    </Modal>
  );
};

export default AddImageWindow;
