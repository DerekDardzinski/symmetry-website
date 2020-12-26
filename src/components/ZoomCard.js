import React from "react";
import Display from "./Display";

function ZoomCard(props) {
  return (
    <div className="zoom-card">
      <div className="zoom-card-group">
        <Display orbit={true}>{props.children}</Display>
      </div>
      <div className="zoom-card-container">
        <h4>
          <b>{props.title}</b>
        </h4>
      </div>
      <div className="zoom-card-info">
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <b>{props.left_side}</b>
        </div>
      </div>
    </div>
  );
}

export default ZoomCard;
