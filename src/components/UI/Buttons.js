import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

function ButtonsHOC(props) {
  const { classes, children, ...restProps } = props;
  debugger;
  return (
    <Button
      classes={{ root: classes.root, label: classes.label }}
      {...restProps}
    >
      {children}
    </Button>
  );
}
ButtonsHOC.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default ButtonsHOC;

// https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children
