import { useDispatch, useSelector } from "react-redux";
import { galleryActions } from "../../store/images-slice";
import classes from "./ImagesForLarge.module.css";

function ImageLarger({ name, description, url, height, width }) {
  const dispatch = useDispatch();
  const selectedImage = useSelector((state) => state.gallery.dummyImages);
  const imageSubmitHandler = () => {
    dispatch(galleryActions.addToGallery(selectedImage));
  };
  return (
    <div className={classes.container}>
      <img
        src={url}
        className={classes.img}
        alt={description}
        width="350"
        height="350"
      ></img>
      <br></br>

      <h1 className={classes.caption}>
        Name : {description ? description : name}
      </h1>
      <h2 className={classes.caption}>
        Size : {height}*{width}
      </h2>
      <button className={classes.btn} onClick={imageSubmitHandler}>
        Submit
      </button>
    </div>
  );
}

export default ImageLarger;
