import React from "react";
import App from "../../App";
import { capitalizeFirstLetter } from "../../utils/helpers";
//import pictures

function Nav() {
  const categories = [
    {
      name: "portfolio",
      portfolio:
        "Each project showcases a different aspect of my full stack capabilities",
    },
  ];
  //
  const handleClick = () => {
    console.log("click handled");
  };
  //
  //   function categorySelected(name) {
  //     console.log(`${name} clicked`);
  //   }
  //
  return (
    <header data-testid="header" className="flex-row px-1">
      <h2>
        <a href="/">
          <span role="img" aria-label="camera"></span>
          Susan Pero
        </a>
      </h2>
      <nav>
        <ul className="flex-right">
          <li className="mx-2">
            <a href="#about" onClick={() => handleClick()}>
              About Me
            </a>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick()}>Contact</span>
          </li>
          {categories.map((category) => (
            <li className="mx-1" key={category.name}>
              <span
                onClick={() => {
                  handleClick();
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
