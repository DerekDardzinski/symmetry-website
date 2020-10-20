import React from "react";
import Sidebar from "./components/Sidebar";
import Axes from "./components/build/Axes";
import Container from "react-bootstrap/Container";
import "./App.css";
import { Col, Row } from "react-bootstrap";

function App() {
  const styles = {
    container: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    row: {
      marginLeft: 0,
      marginRight: 0,
    },
    col: {
      paddingLeft: 0,
      paddingRight: 0,
      backgroundColor: "rgba(230,0,230,1)",
      width: "200px",
    },
    col2: {
      paddingLeft: 0,
      paddingRight: 0,
      backgroundColor: "rgba(230,230,230,1)",
    },
  };
  return (
    <div className="App">
      <Sidebar />
      <Axes />
    </div>
  );
}

export default App;
