import React from "react";
import Sidebar from "./components/Sidebar";
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
      backgroundColor: "rgba(230,230,230,1)",
    },
  };
  return (
    <div className="App">
      <Container fluid style={styles.container}>
        <Row style={styles.row}>
          <Col style={styles.col}>
            <Sidebar />
          </Col>
          <Col style={styles.col}>Point groups go here</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
