import classes from "./AppHeaderText.module.css";
const AppHeaderText = (props) => {
  return <h1 className={classes.headerText}>{props.children}</h1>;
};

export default AppHeaderText;
