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
  bbrftl: [0, Math.PI / 4, Math.PI / 3.3],
  tbrfbl: [0, Math.PI / 4, -Math.PI / 3.3],
  bblftr: [0, -Math.PI / 4, Math.PI / 3.3],
  tblfbr: [0, -Math.PI / 4, -Math.PI / 3.3],
  a1: [Math.PI / 2, 0, 0],
  a2: [Math.PI / 2, 0, Math.PI / 3],
  a3: [Math.PI / 2, 0, (2 * Math.PI) / 3],
};

const planeRotations = {
  two: [0, 0, 0],
  four: [0, Math.PI / 2, 0],
  fourdu: [0, Math.PI / 4, 0],
  fourdd: [0, -Math.PI / 4, 0],
  three: [0, Math.PI / 3, 0],
};

const axisProps = {
  nonCubic: {
    x: {
      rotationSym: 4,
      axisRotation: axisRotations.x,
      rotationColor: "black",
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
      rotationColor: "black",
      planeColor: "black",
      axisColor: "gray",
      planeRotation1: planeRotations.four,
    },
    a2: {
      rotationSym: 2,
      axisRotation: axisRotations.a2,
      rotationColor: "blue",
      planeColor: "blue",
      axisColor: "gray",
      planeRotation1: planeRotations.four,
    },
    a3: {
      rotationSym: 2,
      axisRotation: axisRotations.a3,
      rotationColor: "green",
      planeColor: "green",
      axisColor: "gray",
      planeRotation1: planeRotations.four,
    },
    z: {
      rotationSym: 3,
      axisRotation: axisRotations.z,
      rotationColor: "purple",
      planeColor: "purple",
      axisColor: "gray",
      planeRotation1: planeRotations.four,
    },
  },
  cubic: {
    x: {
      rotationSym: 4,
      axisRotation: axisRotations.x,
      rotationColor: "black",
      planeColor: "gray",
      axisColor: "gray",
      planeRotation1: planeRotations.four,
      hasPlane: true,
    },
    xdd: {
      rotationSym: 4,
      axisRotation: axisRotations.x,
      rotationColor: "black",
      planeColor: "gray",
      axisColor: "gray",
      planeRotation1: planeRotations.fourdu,
      hasPlane: true,
    },
    xdu: {
      rotationSym: 4,
      axisRotation: axisRotations.x,
      rotationColor: "black",
      planeColor: "gray",
      axisColor: "gray",
      planeRotation1: planeRotations.fourdd,
      hasPlane: true,
    },
    y: {
      rotationSym: 4,
      axisRotation: axisRotations.y,
      rotationColor: "black",
      planeColor: "gray",
      axisColor: "gray",
      planeRotation1: planeRotations.two,
      hasPlane: true,
    },
    ydd: {
      rotationSym: 4,
      axisRotation: axisRotations.y,
      rotationColor: "black",
      planeColor: "gray",
      axisColor: "gray",
      planeRotation1: planeRotations.fourdu,
      hasPlane: true,
    },
    ydu: {
      rotationSym: 4,
      axisRotation: axisRotations.y,
      rotationColor: "black",
      planeColor: "gray",
      axisColor: "gray",
      planeRotation1: planeRotations.fourdd,
      hasPlane: true,
    },
    z: {
      rotationSym: 4,
      axisRotation: axisRotations.z,
      rotationColor: "black",
      planeColor: "gray",
      axisColor: "gray",
      planeRotation1: planeRotations.two,
      hasPlane: true,
    },
    zdd: {
      rotationSym: 4,
      axisRotation: axisRotations.z,
      rotationColor: "black",
      planeColor: "gray",
      axisColor: "gray",
      planeRotation1: planeRotations.fourdu,
      hasPlane: true,
    },
    zdu: {
      rotationSym: 4,
      axisRotation: axisRotations.z,
      rotationColor: "black",
      planeColor: "gray",
      axisColor: "gray",
      planeRotation1: planeRotations.fourdd,
      hasPlane: true,
    },
    bbrftl: {
      rotationSym: 3,
      axisRotation: axisRotations.bbrftl,
      rotationColor: "black",
      planeColor: "gray",
      axisColor: "gray",
      planeRotation1: planeRotations.three,
      hasPlane: false,
    },
    bblftr: {
      rotationSym: 3,
      axisRotation: axisRotations.bblftr,
      rotationColor: "black",
      planeColor: "gray",
      axisColor: "gray",
      planeRotation1: planeRotations.three,
      hasPlane: false,
    },
    tbrfbl: {
      rotationSym: 3,
      axisRotation: axisRotations.tbrfbl,
      rotationColor: "black",
      planeColor: "grey",
      axisColor: "gray",
      planeRotation1: planeRotations.three,
      hasPlane: false,
    },
    tblfbr: {
      rotationSym: 3,
      axisRotation: axisRotations.tblfbr,
      rotationColor: "black",
      planeColor: "gray",
      axisColor: "gray",
      planeRotation1: planeRotations.three,
      hasPlane: false,
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
          opacity={0.5}
          transparent="true"
          blending={THREE.NormalBlending}
        />
      </mesh>
    </group>
  );
};

const AxisLine = ({ props }) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.y += 0.005));
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

        <AxisLine props={axisProps.cubic.x} />
        <AxisLine props={axisProps.cubic.xdd} />
        <AxisLine props={axisProps.cubic.xdu} />
        <AxisLine props={axisProps.cubic.y} />
        <AxisLine props={axisProps.cubic.ydd} />
        <AxisLine props={axisProps.cubic.ydu} />
        <AxisLine props={axisProps.cubic.z} />
        <AxisLine props={axisProps.cubic.zdd} />
        <AxisLine props={axisProps.cubic.zdu} />
        <AxisLine props={axisProps.cubic.bblftr} />
        <AxisLine props={axisProps.cubic.bbrftl} />
        <AxisLine props={axisProps.cubic.tblfbr} />
        <AxisLine props={axisProps.cubic.tbrfbl} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default Axes;
