import React from "react";
import PropTypes from "prop-types";
import Header from "../Header";
import MenuItem from "../MenuItem";
import style from "./Menu.module.css";

const Menu = props => (
  <ul className={style.nobullets}>
    <Header title="Our Birds" size={16} />
    {props.birds.map((bird, index) => (
      <MenuItem bird={bird} onClick={props.onClick} key={index} />
    ))}
  </ul>
);

Menu.propTypes = {
  birds: PropTypes.array
};

Menu.defaultProps = {
  birds: [
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Tyto_alba_-British_Wildlife_Centre%2C_Surrey%2C_England-8a_%281%29.jpg/330px-Tyto_alba_-British_Wildlife_Centre%2C_Surrey%2C_England-8a_%281%29.jpg",
      name: "Barn Owl",
      age: 36,
      sex: "female",
      weight: "0.52",
      price: 500,
      origin: "UK"
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Tyto_alba_-British_Wildlife_Centre%2C_Surrey%2C_England-8a_%281%29.jpg/330px-Tyto_alba_-British_Wildlife_Centre%2C_Surrey%2C_England-8a_%281%29.jpg",
      name: "Barn Owl",
      age: 24,
      sex: "female",
      weight: "0.48",
      price: 480,
      origin: "UK"
    }
  ]
};

export default Menu;
