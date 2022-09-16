import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import photo from "../../assets/small/commercial/0.jpg";

function Portfolio(props) {
  const currentCategory = {
    name: "portfolio",
    description:
      "Each project showcases a different aspect of my full stack capabilities",
  };
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p>
      <div className="flex-row">
        <img
          src={photo}
          alt="ALTERNATE TEXT GOES HERE"
          className="img-thumbnail mx-1"
        ></img>
      </div>
    </section>
  );
}
export default Portfolio;
