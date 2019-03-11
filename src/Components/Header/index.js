import React from "react";
import PropTypes from "prop-types";

const Header = props => {
    return <h1 style={{ fontSize: props.fontSize }}>{props.title}</h1>;
};

Header.propTypes = {
    fontSize: PropTypes.string,
    title: PropTypes.string
};

Header.defaultProps = {
    fontSize: "16px",
    title: "Title"
};

export default Header;
