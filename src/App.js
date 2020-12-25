import React from "react";
import Home from "./pages/Home";
import TriclinicPage from "./pages/TriclinicPage";
import MonoclinicPage from "./pages/MonoclinicPage";
import RhombohedralPage from "./pages/RhombohedralPage";
import HexagonalPage from "./pages/HexagonalPage";
import OrthorhombicPage from "./pages/OrthorhombicPage";
import TetragonalPage from "./pages/TetragonalPage";
import CubicPage from "./pages/CubicPage";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/triclinic" component={TriclinicPage} />
        <Route exact path="/monoclinic" component={MonoclinicPage} />
        <Route exact path="/rhombohedral" component={RhombohedralPage} />
        <Route exact path="/hexagonal" component={HexagonalPage} />
        <Route exact path="/orthorhombic" component={OrthorhombicPage} />
        <Route exact path="/tetragonal" component={TetragonalPage} />
        <Route exact path="/cubic" component={CubicPage} />
      </Router>
    </div>
  );
}

export default App;
