import style from "./NotFound.module.css";
function NotFound() {
  return (
    <div className={style["not-found-container"]}>
      <img
        src="https://elementor.com/blog/wp-content/uploads/sites/9/2020/05/Custom-WordPress-404-Page-01-1024x536.png"
        alt="not found banner"
        className={style["image"]}
      ></img>
    </div>
  );
}
export default NotFound;
