import React from "react";
import PropTypes from "prop-types";
import Header from "../Header";

const Menu = props => (
    <ul>
        <Header title="Our Birds" size={16} />
        {props.birds.map((bird, index) => (
            <MenuItem onClick={prop.onClick(index)} bird={bird} />
        ))}
    </ul>
);

export default Menu;
