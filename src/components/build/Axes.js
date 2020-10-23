import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls, softShadows } from "drei";
import * as THREE from "three";
import basicArgsObj from "./BasicParams";
import axisProps from "./AxesProps";
import { TwoFold, ThreeFold, FourFold, SixFold } from "./RotationSymbols";
import "../style/AnimationTest.css";
import { matrix } from "mathjs";
import generatePointGroup from "./Generate";
import MirrorPlane from "./MirrorPlanes";
import tetragonalGroups from "./crystalSystems/Tetragonal";

// THREE.Object3D.DefaultUp = new THREE.Vector3(0, 0, 1);

softShadows();

// const generators = {
// // c: matrix([
// // [-1, 0, 0],
// // [0, 1, 0],
// // [0, 0, -1],
// // ]),
// // g: matrix([
// // [0, -1, 0],
// // [1, 0, 0],
// // [0, 0, 1],
// // ]),
// k: matrix([
// [0, -1, 0],
// [-1, 0, 0],
// [0, 0, 1],
// ]),
// // h: matrix([
// // [-1, 0, 0],
// // [0, -1, 0],
// // [0, 0, 1],
// // ]),
// n: matrix([
// [-1 / 2, -Math.sqrt(3) / 2, 0],
// [Math.sqrt(3) / 2, -1 / 2, 0],
// [0, 0, 1],
// ]),
// };
const generators = tetragonalGroups._4ommm;

const generalPoint = matrix([[1.5], [0.5], [0.9]]);

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

const arrayPositions = generatePointGroup(generators, generalPoint);
console.log(arrayPositions);

let atoms = [];
arrayPositions.forEach((p) => {
  atoms.push(<Atom color="red" position={p} />);
});

const AxisLine = ({ props }) => {
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
    <group>
      {rotationElement}
      {mirrorPlane}
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

const PointGroup = () => {
  // const mesh = useRef();
  // useFrame(() => (mesh.current.rotation.z += 0.005));
  return (
    <group>
      {atoms}
      <AxisLine props={axisProps.nonCubic.z} />
      <AxisLine props={axisProps.nonCubic.y} />
      <AxisLine props={axisProps.nonCubic.x} />
    </group>
  );
};

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
            <mesh receiveShadow rotation={[0, 0, 0]} position={[0, 0, -3]}>
              <planeBufferGeometry attach="geometry" args={[100, 100]} />
              <shadowMaterial
                attach="material"
                opacity={0.3}
                // color="yellow"
              />
            </mesh>
          </group>

          <PointGroup />
          <OrbitControls />
        </group>
      </Canvas>
    </div>
  );
};

export default Axes;
