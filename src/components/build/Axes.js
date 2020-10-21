import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls, softShadows } from "drei";
import * as THREE from "three";
import basicArgsObj from "./BasicParams";
import axisProps from "./AxesProps";
import { TwoFold, ThreeFold, FourFold, SixFold } from "./RotationSymbols";
import "../style/AnimationTest.css";
import { matrix, multiply, squeeze } from "mathjs";

// THREE.Object3D.DefaultUp = new THREE.Vector3(0, 0, 1);

const basicArgs = [
  basicArgsObj.radiusTop,
  basicArgsObj.radiusBottom,
  basicArgsObj.height,
  basicArgsObj.radialSegments,
  basicArgsObj.heightSegments,
  basicArgsObj.openEnded,
  basicArgsObj.thetaStart,
  basicArgsObj.thetaLength,
];

const mat = matrix([
  [0, -1, 0],
  [1, 0, 0],
  [0, 0, 1],
]);

var positions = [];
var positions2 = [];
var i;
const start = matrix([[1], [0.4], [0.5]]);
const start2 = matrix([[1], [0.4], [-0.5]]);
for (i = 1; i <= 4; i++) {
  if (i === 1) {
    positions.push(multiply(mat, start));
    positions2.push(multiply(mat, start2));
  } else {
    positions.push(multiply(mat, positions.slice(-1)[0]));
    positions2.push(multiply(mat, positions2.slice(-1)[0]));
  }
}

const arrayPositions = positions.map((x) => squeeze(x)._data);
const arrayPositions2 = positions2.map((x) => squeeze(x)._data);

console.log(arrayPositions);

const Atom = ({ color, position }) => {
  return (
    <mesh castShadow position={position}>
      <sphereBufferGeometry attach="geometry" args={[0.2, 30, 30]} />
      <meshStandardMaterial
        side={THREE.DoubleSide}
        attach="material"
        color={color}
      />
    </mesh>
  );
};

let atoms = [];
arrayPositions.forEach((p) => {
  atoms.push(<Atom color="red" position={p} />);
});
let atoms2 = [];
arrayPositions2.forEach((p) => {
  atoms2.push(<Atom color="red" position={p} />);
});

const MirrorPlane = ({ axisRotation, color, planeRotation }) => {
  const edgeLength = basicArgsObj.height / 1.2;
  var square = new THREE.Shape();
  square.moveTo(edgeLength / 2, edgeLength / 2);
  square.lineTo(edgeLength / 2, edgeLength / 2 - edgeLength);
  square.lineTo(edgeLength / 2 - edgeLength, edgeLength / 2 - edgeLength);
  square.lineTo(edgeLength / 2 - edgeLength, edgeLength / 2);

  var extrudeSettings = {
    steps: 5,
    depth: 0.05,
    bevelEnabled: false,
  };
  return (
    <group position={[0, 0, 0]} rotation={axisRotation}>
      <mesh position={[-0.025, 0, -0.025]} rotation={planeRotation}>
        <extrudeGeometry attach="geometry" args={[square, extrudeSettings]} />
        <meshLambertMaterial
          attach="material"
          color={color}
          opacity={0.3}
          transparent="true"
          side={THREE.DoubleSide}
          depthWrite={false}
          // blending={THREE.NormalBlending}
        />
      </mesh>
    </group>
  );
};

const AxisLine = ({ props }) => {
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.z += 0.005));
  let rotationElement;
  if (props.rotationSym === 1) {
    rotationElement = <></>;
  } else if (props.rotationSym === 2) {
    rotationElement = (
      <>
        <TwoFold
          rotation={props.axisRotation}
          color={props.rotationColor}
          height={basicArgsObj.height / 2.2}
        />
        <TwoFold
          rotation={props.axisRotation}
          color={props.rotationColor}
          height={-basicArgsObj.height / 2.2}
        />
      </>
    );
  } else if (props.rotationSym === 3) {
    rotationElement = (
      <>
        <ThreeFold
          rotation={props.axisRotation}
          color={props.rotationColor}
          height={basicArgsObj.height / 2.2}
          shapeRotation={[Math.PI / 2, 0, Math.PI / 6]}
        />
        <ThreeFold
          rotation={props.axisRotation}
          color={props.rotationColor}
          height={-basicArgsObj.height / 2.2}
          shapeRotation={[Math.PI / 2, 0, -Math.PI / 6]}
        />
      </>
    );
  } else if (props.rotationSym === 4) {
    console.log("Four fold");
    rotationElement = (
      <>
        <FourFold
          rotation={props.axisRotation}
          color={props.rotationColor}
          height={basicArgsObj.height / 2.2}
        />
        <FourFold
          rotation={props.axisRotation}
          color={props.rotationColor}
          height={-basicArgsObj.height / 2.2}
        />
      </>
    );
  } else if (props.rotationSym === 6) {
    rotationElement = (
      <>
        <SixFold
          rotation={props.axisRotation}
          color={props.rotationColor}
          height={basicArgsObj.height / 2.2}
        />
        <SixFold
          rotation={props.axisRotation}
          color={props.rotationColor}
          height={-basicArgsObj.height / 2.2}
        />
      </>
    );
  }

  let mirrorPlane;
  if (props.hasPlane) {
    mirrorPlane = (
      <MirrorPlane
        axisRotation={props.axisRotation}
        planeRotation={props.planeRotation1}
        color={props.planeColor}
      />
    );
  } else {
    mirrorPlane = <></>;
  }

  return (
    <group ref={mesh}>
      {rotationElement}
      {mirrorPlane}
      {atoms}
      {atoms2}
      <mesh castShadow position={[0, 0, 0]} rotation={props.axisRotation}>
        <cylinderBufferGeometry attach="geometry" args={basicArgs} />
        <meshStandardMaterial
          attach="material"
          side="DoubleSide"
          color={props.axisColor}
        />
      </mesh>
    </group>
  );
};

softShadows();

const Axes = () => {
  return (
    <div className="AnimationTest">
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [5, 2, 10], fov: 40 }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 0, -20]} intensity={0.5} />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <pointLight position={[-10, -10, 0]} intensity={1.5} />
        <pointLight position={[10, 10, 0]} intensity={1.5} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
          <group>
            <mesh
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -3, 0]}
            >
              <planeBufferGeometry attach="geometry" args={[100, 100]} />
              <shadowMaterial attach="material" opacity={0.3} />
            </mesh>
          </group>

          <AxisLine props={axisProps.nonCubic.x} />
          <AxisLine props={axisProps.nonCubic.y} />
          <AxisLine props={axisProps.nonCubic.z} />
          <OrbitControls />
        </group>
      </Canvas>
    </div>
  );
};

export default Axes;
