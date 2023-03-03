import classes from "./AppHeader.moudle.css";
const AppHeader = (props) => {
  return <h1 className={classes.header}>{props.children}</h1>;
};

export default AppHeader;
