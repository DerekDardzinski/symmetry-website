import React, { useState } from "react";
import MathJax from "react-mathjax2";
import "./style/Layout.css";

function Layout(props) {
  const tex = `m\\bar{3}m \\space (O_{h})`;
  return (
    <div className="right">
      <div className="header">
        <div className="symbol">
          <MathJax.Context input="tex">
            <MathJax.Node inline>{tex}</MathJax.Node>
          </MathJax.Context>
        </div>
      </div>
      <div className="group">{props.children}</div>
    </div>
  );
}

export default Layout;
