import React from "react";
import PropTypes from "prop-types";

const Header = props => {
    return <h1 style={`fontSize: ${props.size}px`}>{props.title}</h1>;
};

Header.propTypes = {
    size: PropTypes.number,
    title: PropTypes.string
};

Header.defaultProps = {
    size: 16,
    title: "Title"
};

export default Header;
