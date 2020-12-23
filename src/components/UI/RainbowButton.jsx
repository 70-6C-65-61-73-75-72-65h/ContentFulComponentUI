import { withStyles } from "@material-ui/core/styles";
import ButtonsHOC from "./Buttons";

const styles = {
  root: {
    background:
      "linear-gradient(45deg, rgba(186,21,154,1) 0%, rgba(185,37,110,1) 34%, rgba(219,168,37,1) 88%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    "&:hover": {
      background:
        "linear-gradient(45deg, rgba(186,21,154,1) 0%, rgba(37,169,185,1) 34%, rgba(37,219,97,1) 88%)",
    },
  },
};

export default withStyles(styles)(ButtonsHOC);

// gradient colors
// https://cssgradient.io/
