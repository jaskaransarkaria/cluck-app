import React from "react";
import PropTypes from "prop-types";
import style from "./MenuItem.module.css";

const MenuItem = props => (
  <li>
    <img
      className={style.imgThumb}
      src={`${props.bird.imageUrl}`}
      alt={`${props.bird.name}`}
      style={{ float: "left" }}
    />
    <div>
      <p>Name: {props.bird.name}</p>
      <p>Age: {props.bird.age} months</p>
      <p>Sex: {props.bird.sex}</p>
      <p>Weight: {props.bird.weight}kg</p>
      <p>Price: £{props.bird.price}</p>
      <p>Country of Origin: {props.bird.origin}</p>
      <button onClick={() => props.onClick(props.bird.id)}>Add to Order</button>
    </div>
  </li>
);

MenuItem.propTypes = {
  bird: PropTypes.object
};

export default MenuItem;
