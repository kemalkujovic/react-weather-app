import React from "react";
import Card from "../../Card/Card";
const City = (props) => {
  return (
    <Card>
      <form>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Search for city..."
        />
      </form>
    </Card>
  );
};

export default City;
