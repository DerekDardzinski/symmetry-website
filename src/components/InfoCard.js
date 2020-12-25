import React from "react";
import Display from "./Display";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const StyledButton = withStyles({
  root: {
    backgroundColor: "rgba(162, 197, 172, 0.5)",
    border: "none",
    padding: "15px 20px",
    textAlign: "center",
    textStyle: "normal",
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textSize: "25px",
    fontSize: "1.1rem",
    borderRadius: "20px",
    marginTop: "-5px",
    marginRight: "-5px",
    fontFamily: "Montserrat, serif",
    "&:hover": {
      // boxShadow: "0 8px 20px 0 rgba(0, 0, 0, 0.2)",
      backgroundColor: "rgba(162, 197, 172, 0.9)",
      color: "black",
    },
  },
  label: {
    textTransform: "none",
  },
})(Button);

function InfoCard(props) {
  return (
    <div className="home-card">
      <div className="home-card-group">
        <Display orbit={true}>{props.children}</Display>
      </div>
      <div className="home-card-container">
        <h4>
          <b>{props.title}</b>
        </h4>
      </div>
      <div className="home-card-info">
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <b>{props.left_side}</b>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
