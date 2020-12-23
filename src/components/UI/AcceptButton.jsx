import { withStyles } from "@material-ui/core/styles";
import ButtonsHOC from "./Buttons";

const styles = {
  root: {
    background: "linear-gradient(45deg, rgb(5, 87, 49) 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "rgb(120, 218, 28)",
    height: 48,
    padding: "0 30px",
  },
  label: {
    textTransform: "capitalize",
  },
};

export default withStyles(styles)(ButtonsHOC);
