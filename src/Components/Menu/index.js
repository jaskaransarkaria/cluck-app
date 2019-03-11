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

MenuItem.defaultProps = {
    bird: {
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Tyto_alba_-British_Wildlife_Centre%2C_Surrey%2C_England-8a_%281%29.jpg/330px-Tyto_alba_-British_Wildlife_Centre%2C_Surrey%2C_England-8a_%281%29.jpg",
        name: "Barn Owl",
        age: 36,
        sex: "female",
        weight: "0.52",
        price: 500,
        origin: "UK"
    }
};

export default MenuItem;
