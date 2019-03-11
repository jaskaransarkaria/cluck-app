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

MenuItem.defaultProps = {
    [ {
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Tyto_alba_-British_Wildlife_Centre%2C_Surrey%2C_England-8a_%281%29.jpg/330px-Tyto_alba_-British_Wildlife_Centre%2C_Surrey%2C_England-8a_%281%29.jpg",
        name: "Barn Owl",
        age: 36,
        sex: "female",
        weight: "0.52",
        price: 500,
        origin: "UK"
    } ]
};

export default Menu;
