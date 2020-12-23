import { withStyles } from "@material-ui/core/styles";
import ButtonsHOC from "./Buttons";

const styles = {
  root: {
    background: "#21d8ee",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    "&:hover": {
      background:
        "linear-gradient(45deg, rgba(21,186,156,.8) 1%, rgba(37,169,185,.5) 34%, rgba(37,219,97,.7) 88%)",
    },
  },
  label: {
    textTransform: "capitalize",
  },
};

export default withStyles(styles)(ButtonsHOC);
