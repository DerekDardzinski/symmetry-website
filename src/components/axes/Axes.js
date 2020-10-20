import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls, softShadows } from "drei";
import * as THREE from "three";
import basicArgsObj from "./BasicParams";
import { TwoFold, ThreeFold, FourFold, SixFold } from "./RotationSymbols";
import "../style/AnimationTest.css";

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

const axisRotations = {
  x: [Math.PI / 2, Math.PI / 2, 0],
  y: [0, 0, Math.PI / 2],
  z: [0, Math.PI / 2, 0],
  bbrftl: [0, Math.PI / 4, Math.PI / 4],
  tbrfbl: [0, Math.PI / 4, -Math.PI / 4],
  bblftr: [0, -Math.PI / 4, Math.PI / 4],
  tblfbr: [0, -Math.PI / 4, -Math.PI / 4],
  a1: [Math.PI / 2, 0, 0],
  a2: [Math.PI / 2, 0, Math.PI / 3],
  a3: [Math.PI / 2, 0, (2 * Math.PI) / 3],
};

const planeRotations = {
  two: [0, 0, 0],
  four: [0, Math.PI / 2, 0],
};

const axisProps = {
  nonCubic: {
    x: {
      rotationSym: 4,
      axisRotation: axisRotations.x,
      rotationColor: "red",
      planeColor: "gray",
      axisColor: "gray",
      planeRotation1: planeRotations.four,
      planeRotation2: planeRotations.four,
    },
    y: {
      rotationSym: 4,
      axisRotation: axisRotations.y,
      rotationColor: "blue",
      planeColor: "gray",
      axisColor: "gray",
      planeRotation1: planeRotations.two,
      planeRotation2: planeRotations.four,
    },
    z: {
      rotationSym: 4,
      axisRotation: axisRotations.z,
      rotationColor: "green",
      planeColor: "gray",
      axisColor: "gray",
      planeRotation1: planeRotations.two,
      planeRotation2: planeRotations.four,
    },
  },
  hexagonal: {
    a1: {
      rotationSym: 2,
      axisRotation: axisRotations.a1,
      rotationColor: "red",
      planeColor: "red",
      axisColor: "gray",
    },
    a2: {
      rotationSym: 2,
      axisRotation: axisRotations.a2,
      rotationColor: "blue",
      planeColor: "blue",
      axisColor: "gray",
    },
    a3: {
      rotationSym: 2,
      axisRotation: axisRotations.a3,
      rotationColor: "green",
      planeColor: "green",
      axisColor: "gray",
    },
    z: {
      rotationSym: 6,
      axisRotation: axisRotations.z,
      rotationColor: "purple",
      planeColor: "purple",
      axisColor: "gray",
    },
  },
};

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
          blending={THREE.NormalBlending}
        />
      </mesh>
    </group>
  );
};

const AxisLine = ({ props }) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.y += 0.0));
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
        />
        <ThreeFold
          rotation={props.axisRotation}
          color={props.rotationColor}
          height={-basicArgsObj.height / 2.2}
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

  return (
    <group ref={mesh}>
      {rotationElement}
      <MirrorPlane
        axisRotation={props.axisRotation}
        planeRotation={props.planeRotation1}
        color={props.planeColor}
      />
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

function Axes() {
  return (
    <div className="AnimationTest">
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [-5, 2, 10], fov: 40 }}
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
      </Canvas>
    </div>
  );
}

export default Axes;
