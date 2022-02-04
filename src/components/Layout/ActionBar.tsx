import { useDispatch} from "react-redux";
import { galleryActions } from "../../store/images-slice.js";
import classes from "./ActionBar.module.css";

const ActionBar = () => {
  const dispatch = useDispatch();

  const selectAllChangeHandler = (event:React.FormEvent<HTMLInputElement> ) => {
    event.preventDefault();
    dispatch(galleryActions.updateSelectAll());
  };
  
  const deleteClickHandler = (event:React.MouseEvent<HTMLButtonElement> ) => {
    event.preventDefault();
    dispatch(galleryActions.removeImgFromGallery());
  };


  const searchChangeHandler = (event:React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const searchValue =event.currentTarget.value;;
    dispatch(galleryActions.updateSearchTerm(searchValue));
  };

  const titleBySortHandler = (event:React.MouseEvent<HTMLButtonElement> ) => {
    event.preventDefault();
 dispatch(galleryActions.sortByTitle());
  };

  const dateBySortHandler = (event:React.MouseEvent<HTMLButtonElement> ) => {
    event.preventDefault();

    dispatch(galleryActions.sortByDate());
  };

  const sizeBySortHandler = (event:React.MouseEvent<HTMLButtonElement> ) => {
    event.preventDefault();

    dispatch(galleryActions.sortBySize());
  };

  return (
    <div className={classes.container}>
      <div className={classes.search}>
        <div className={classes.selectCheck}>
          <label>
            <input
              type="checkbox"
              className={classes.checkbox}
             onClick={selectAllChangeHandler}
            />
            Select All
          </label>
        </div>
        <div className={classes.searchBarContainer}>
            <i
              onClick={deleteClickHandler}
              className="fa fa-trash-o"
              style={{ fontSize: "20px", marginTop: "5px" }}
            />
          <div className={classes.searchbar}>
            <i
              className="fa fa-search"
              style={{
                fontSize: "16px",
                marginRight: "10px",
                marginLeft: "10px",
              }}
            />
            <input
              type="text"
              placeholder="Search Media"
              className={classes.bar}
              onChange={searchChangeHandler}
            />
          </div>
        </div>
      </div>
      <div className={classes.sort}>
        <div className={classes.sortBy}>Sort By</div>
        <div className={classes.sortContrl}>
          <button className={classes.sortBtn} onClick={titleBySortHandler}>
            Title
          </button>
          <button className={classes.sortBtn} onClick={dateBySortHandler}>
            Date
          </button>
          <button className={classes.sortBtn} onClick={sizeBySortHandler}>
            Size
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionBar;
