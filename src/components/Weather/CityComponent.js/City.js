import React from "react";
import Card from "../../Card/Card";
import logo from "../../../assets/icons/perfect-day.svg";
import classes from "./City.module.css";
const City = (props) => {
  return (
    <Card>
      <div>
        <h5>React Weather App</h5>
        <img src={logo} className={classes.logo} />
        <h5 className={classes["search-name"]}>Find Weather of your city</h5>
      </div>
      <form>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Search for city..."
        />
        <button>Search</button>
      </form>
    </Card>
  );
};

export default City;
