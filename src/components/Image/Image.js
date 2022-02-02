import { useDispatch } from "react-redux";
import { galleryActions } from "../../store/images-slice";
import classes from "./Image.module.css";

function Image({
  id,
  url,
  description,
  name,
  isChecked,
  showSelectButton,
  onClick,
  className,
}) {
  const dispatch = useDispatch();
  const imageCheckedHandler = () => {
    dispatch(galleryActions.updateImgToSelected(id));
  };
  return (
    <>
      <img
        onClick={(a) => onClick && onClick(a)}
        src={url}
        className={className || classes.img}
        alt={description}
      ></img>
      {showSelectButton && (
        <input
          type="checkbox"
          className={classes.checkbox}
          onChange={imageCheckedHandler}
          checked={isChecked}
        ></input>
      )}
      <p className={classes.caption}>{name}</p>
    </>
  );
}

Image.defaultProps = {
  isChecked: false,
  showSelectButton: true,
  className: "",
};

export default Image;
