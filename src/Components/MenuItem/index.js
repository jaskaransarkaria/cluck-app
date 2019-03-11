import React from "react";
import PropTypes from "prop-types";

const MenuItem = props => (
    <li>
        <img src={props.bird.imageUrl} />
        <p>Name: {props.bird.name}</p>
        <p>Age:{props.bird.age} months</p>
        <p>Sex: {props.bird.sex}</p>
        <p>Weight: {props.bird.weight}kg</p>
        <p>Price: {props.bird.price}</p>
        <p>Country of Origin: {props.bird.origin}</p>
        <button onClick={addToOrder}>+</button>
    </li>
);

TodoList.propTypes = {
    bird: PropTypes.object
};

export default MenuItem;
