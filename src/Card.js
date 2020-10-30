import React, { useState } from "react";
import Display from "./components/Display";
import PointGroup from "./components/build/Axes";
import Text from "./components/build/Question";

// <img
// className="home-card-image"
// src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&w=1000&q=80"
// alt="img"
// style={{ width: "100%" }}
// />;

function Card(props) {
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
        <div>
          <b>Group Shown: m3m</b>
        </div>
        <button className="home-card-button">explore</button>
      </div>
    </div>
  );
}

export default Card;
