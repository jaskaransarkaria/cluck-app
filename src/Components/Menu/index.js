import React from "react";

const MenuItem = props => (
    <li>
        <img src={props.imageUrl} />
        <p>Name: {props.name}</p>
        <p>Age:{props.age} months</p>
        <p>Sex: {props.sex}</p>
        <p>Weight: {props.weight}kg</p>
        <p>Price: {props.price}</p>
        <p>Country of Origin: {props.origin}</p>
    </li>
);

export default MenuItem;
