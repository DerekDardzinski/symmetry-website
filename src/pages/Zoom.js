import React, { useState } from "react";
import ZoomCard from "../components/ZoomCard";

function Zoom(props) {
  return (
    <div className="zoom-grid">
      <ZoomCard title={props.title} left_side={props.left_side}>
        {props.children}
      </ZoomCard>
    </div>
  );
}

export default Zoom;
