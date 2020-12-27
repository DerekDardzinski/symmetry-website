import React from "react";
import Display from "./Display";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const StyledButton = withStyles({
  root: {
    backgroundColor: "#9db5b2",
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
      backgroundColor: "#eeeeee",
      color: "black",
    },
  },
  label: {
    textTransform: "none",
  },
})(Button);

function Card(props) {
  return (
    <div className="home-card">
      <div className="home-card-group">
        <Display orbit={false}>{props.children}</Display>
      </div>
      <div className="home-card-container">
        <h4>
          <b>{props.title}</b>
        </h4>
      </div>
      <div className="home-card-info">
        <div>
          <b>
            {props.left_side}
            {props.group_name}
          </b>
        </div>
        <StyledButton
          // className="home-card-button"
          component={Link}
          to={props.route}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </StyledButton>
        {/*
        <button className="home-card-button">{props.button_text}</button>
          */}
      </div>
    </div>
  );
}

export default Card;
