import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls, softShadows } from "drei";
import * as THREE from "three";
import basicArgsObj from "./BasicParams";
import axisProps from "./AxesProps";
import { TwoFold, ThreeFold, FourFold, SixFold } from "./RotationSymbols";
import { matrix, multiply } from "mathjs";
import generatePointGroup from "./Generate";
import MirrorPlane from "./MirrorPlanes";
import tetragonalGroups from "./crystalSystems/Tetragonal";
import triclinicGroups from "./crystalSystems/Triclinic";
import hexagonalGroups from "./crystalSystems/Hexagonal";
import rhombohedralGroups from "./crystalSystems/Rhombohedral";
import cubicGroups from "./crystalSystems/Cubic";
import Atom from "./Atom";

const generators = cubicGroups._m3barm;
// const generators = hexagonalGroups._6barm2;
// const generators = rhombohedralGroups._32;
// const generators = triclinicGroups._p1;

const generalPoint = matrix([[1.5], [0.3], [0.9]]);

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

const arrayPositions = generatePointGroup(generators, generalPoint, false);

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

  let mirrorPlanes;
  if (props.hasPlane) {
    mirrorPlanes = [];
    props.planes.forEach((r) => {
      mirrorPlanes.push(
        <MirrorPlane
          axisRotation={props.axisRotation}
          planeRotation={r}
          color={props.planeColor}
        />
      );
    });
  } else {
    mirrorPlanes = <></>;
  }
  const q = new THREE.Quaternion(0.146, 0.354, 0.354, 0.854);
  const axis = useRef(null);
  useFrame(() => console.log(axis));

  return (
    <group>
      {rotationElement}
      {mirrorPlanes}
      <mesh
        ref={axis}
        castShadow
        position={[0, 0, 0]}
        rotation={props.axisRotation}
      >
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
      <group rotation={[0, 0, 0]}>{atoms}</group>
      <AxisLine props={axisProps.even.x} />
      <AxisLine props={axisProps.even.xy} />
      <AxisLine props={axisProps.even.nxy} />
      <AxisLine props={axisProps.even.xz} />
      <AxisLine props={axisProps.even.nxz} />
      <AxisLine props={axisProps.even.yz} />
      <AxisLine props={axisProps.even.nyz} />
      <AxisLine props={axisProps.even.y} />
      <AxisLine props={axisProps.even.z} />
      <AxisLine props={axisProps.even.nnn_ppp} />
      <AxisLine props={axisProps.even.nnp_ppn} />
      <AxisLine props={axisProps.even.npn_pnp} />
      <AxisLine props={axisProps.even.npp_pnn} />
    </group>
  );
};

const Axes = ({ props }) => {
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
          {props.children}

          <PointGroup />
          <OrbitControls />
        </group>
      </Canvas>
    </div>
  );
};

export default PointGroup;
