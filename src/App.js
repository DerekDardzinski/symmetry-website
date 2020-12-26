import React from "react";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Zoom from "./pages/Zoom";
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
import { Triclinic1, Triclinic1bar } from "./components/groups/Triclinic";
import {
  Monoclinic2,
  Monoclinic2om,
  Monoclinicm,
} from "./components/groups/Monoclinic";
import {
  Rhombohedral3barm,
  Rhombohedral3m,
  Rhombohedral32,
  Rhombohedral3bar,
  Rhombohedral3,
} from "./components/groups/Rhombohedral";
import {
  Hexagonal6ommm,
  Hexagonal6barm2,
  Hexagonal6mm,
  Hexagonal6om,
  Hexagonal622,
  Hexagonal6bar,
  Hexagonal6,
} from "./components/groups/Hexagonal";
import {
  Orthorhombicmmm,
  Orthorhombicmm2,
  Orthorhombic222,
} from "./components/groups/Orthorhombic";
import {
  Tetragonal4ommm,
  Tetragonal4bar2m,
  Tetragonal4mm,
  Tetragonal422,
  Tetragonal4om,
  Tetragonal4bar,
  Tetragonal4,
} from "./components/groups/Tetragonal";
import {
  Cubicm3barm,
  Cubic4bar3m,
  Cubic432,
  Cubicm3bar,
  Cubic23,
} from "./components/groups/Cubic";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/triclinic" component={TriclinicPage} />
        <Route exact path="/triclinic/1">
          <Zoom title="1" left_side="Group Order: 1">
            <Triclinic1 />
          </Zoom>
        </Route>
        <Route exact path="/triclinic/1bar">
          <Zoom
            title={
              <>
                <span style={{ textDecoration: "overline" }}>1</span>
              </>
            }
            left_side="Group Order: 2"
          >
            <Triclinic1bar />
          </Zoom>
        </Route>
        <Route exact path="/monoclinic" component={MonoclinicPage} />
        <Route exact path="/monoclinic/2">
          <Zoom title="2" left_side="Group Order: 2">
            <Monoclinic2 />
          </Zoom>
        </Route>
        <Route exact path="/monoclinic/2om">
          <Zoom title="2/m" left_side="Group Order: 4">
            <Monoclinic2om />
          </Zoom>
        </Route>
        <Route exact path="/monoclinic/m">
          <Zoom title="m" left_side="Group Order: 2">
            <Monoclinicm />
          </Zoom>
        </Route>
        <Route exact path="/rhombohedral" component={RhombohedralPage} />
        <Route exact path="/rhombohedral/3">
          <Zoom title="3" left_side="Group Order: 3">
            <Rhombohedral3 />
          </Zoom>
        </Route>
        <Route exact path="/rhombohedral/3m">
          <Zoom title="3m" left_side="Group Order: 6">
            <Rhombohedral3m />
          </Zoom>
        </Route>
        <Route exact path="/rhombohedral/32">
          <Zoom title="32" left_side="Group Order: 6">
            <Rhombohedral32 />
          </Zoom>
        </Route>
        <Route exact path="/rhombohedral/3bar">
          <Zoom
            title={
              <>
                <span style={{ textDecoration: "overline" }}>3</span>
              </>
            }
            left_side="Group Order: 6"
          >
            <Rhombohedral3bar />
          </Zoom>
        </Route>
        <Route exact path="/rhombohedral/3barm">
          <Zoom
            title={
              <>
                <span style={{ textDecoration: "overline" }}>3</span>m
              </>
            }
            left_side="Group Order: 6"
          >
            <Rhombohedral3barm />
          </Zoom>
        </Route>
        <Route exact path="/hexagonal" component={HexagonalPage} />
        <Route exact path="/hexagonal/6">
          <Zoom title="6" left_side="Group Order: 6">
            <Hexagonal6 />
          </Zoom>
        </Route>
        <Route exact path="/hexagonal/6bar">
          <Zoom
            title={
              <>
                <span style={{ textDecoration: "overline" }}>6</span>
              </>
            }
            left_side="Group Order: 6"
          >
            <Hexagonal6bar />
          </Zoom>
        </Route>
        <Route exact path="/hexagonal/622">
          <Zoom title="622" left_side="Group Order: 12">
            <Hexagonal622 />
          </Zoom>
        </Route>
        <Route exact path="/hexagonal/6om">
          <Zoom title="6/m" left_side="Group Order: 12">
            <Hexagonal6om />
          </Zoom>
        </Route>
        <Route exact path="/hexagonal/6mm">
          <Zoom title="6mm" left_side="Group Order: 12">
            <Hexagonal6mm />
          </Zoom>
        </Route>
        <Route exact path="/hexagonal/6barm2">
          <Zoom
            title={
              <>
                <span style={{ textDecoration: "overline" }}>6</span>m2
              </>
            }
            left_side="Group Order: 12"
          >
            <Hexagonal6barm2 />
          </Zoom>
        </Route>
        <Route exact path="/hexagonal/6ommm">
          <Zoom title="6/mmm" left_side="Group Order: 24">
            <Hexagonal6ommm />
          </Zoom>
        </Route>
        <Route exact path="/orthorhombic" component={OrthorhombicPage} />
        <Route exact path="/orthorhombic/mmm">
          <Zoom title="mmm" left_side="Group Order: 8">
            <Orthorhombicmmm />
          </Zoom>
        </Route>
        <Route exact path="/orthorhombic/mm2">
          <Zoom title="mm2" left_side="Group Order: 4">
            <Orthorhombicmm2 />
          </Zoom>
        </Route>
        <Route exact path="/orthorhombic/222">
          <Zoom title="222" left_side="Group Order: 4">
            <Orthorhombic222 />
          </Zoom>
        </Route>
        <Route exact path="/tetragonal" component={TetragonalPage} />
        <Route exact path="/tetragonal/4">
          <Zoom title="4" left_side="Group Order: 4">
            <Tetragonal4 />
          </Zoom>
        </Route>
        <Route exact path="/tetragonal/4bar">
          <Zoom
            title={
              <>
                <span style={{ textDecoration: "overline" }}>4</span>
              </>
            }
            left_side="Group Order: 4"
          >
            <Tetragonal4bar />
          </Zoom>
        </Route>
        <Route exact path="/tetragonal/4om">
          <Zoom title="4/m" left_side="Group Order: 8">
            <Tetragonal4om />
          </Zoom>
        </Route>
        <Route exact path="/tetragonal/4mm">
          <Zoom title="4mm" left_side="Group Order: 8">
            <Tetragonal4mm />
          </Zoom>
        </Route>
        <Route exact path="/tetragonal/422">
          <Zoom title="422" left_side="Group Order: 8">
            <Tetragonal422 />
          </Zoom>
        </Route>
        <Route exact path="/tetragonal/4bar2m">
          <Zoom
            title={
              <>
                <span style={{ textDecoration: "overline" }}>4</span>2m
              </>
            }
            left_side="Group Order: 4"
          >
            <Tetragonal4bar2m />
          </Zoom>
        </Route>
        <Route exact path="/tetragonal/4ommm">
          <Zoom title="4/mmm" left_side="Group Order: 16">
            <Tetragonal4ommm />
          </Zoom>
        </Route>
        <Route exact path="/cubic" component={CubicPage} />
        <Route exact path="/cubic/23">
          <Zoom title="23" left_side="Group Order: 12">
            <Cubic23 />
          </Zoom>
        </Route>
        <Route exact path="/cubic/432">
          <Zoom title="432" left_side="Group Order: 24">
            <Cubic432 />
          </Zoom>
        </Route>
        <Route exact path="/cubic/m3bar">
          <Zoom
            title={
              <>
                m<span style={{ textDecoration: "overline" }}>3</span>
              </>
            }
            left_side="Group Order: 24"
          >
            <Cubicm3bar />
          </Zoom>
        </Route>
        <Route exact path="/cubic/m3barm">
          <Zoom
            title={
              <>
                m<span style={{ textDecoration: "overline" }}>3</span>m
              </>
            }
            left_side="Group Order: 24"
          >
            <Cubicm3barm />
          </Zoom>
        </Route>
        <Route exact path="/cubic/4bar3m">
          <Zoom
            title={
              <>
                <span style={{ textDecoration: "overline" }}>4</span>3m
              </>
            }
            left_side="Group Order: 24"
          >
            <Cubic4bar3m />
          </Zoom>
        </Route>
      </Router>
    </div>
  );
}

export default App;
