import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls, softShadows } from "drei";
import * as THREE from "three";
import "../style/AnimationTest.css";

const basicArgsObj = {
  radiusTop: 0.05,
  radiusBottom: 0.05,
  height: 5,
  radialSegments: 60,
  heightSegments: 60,
  openEnded: false,
  thetaStart: 0,
  thetaLength: Math.PI * 2,
};

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
  x: [Math.PI / 2, 0, 0],
  y: [0, Math.PI / 2, 0],
  z: [0, 0, Math.PI / 2],
  bbrftl: [0, Math.PI / 4, Math.PI / 4],
  tbrfbl: [0, Math.PI / 4, -Math.PI / 4],
  bblftr: [0, -Math.PI / 4, Math.PI / 4],
  tblfbr: [0, -Math.PI / 4, -Math.PI / 4],
  ha1: [Math.PI / 2, 0, 0],
  ha2: [Math.PI / 2, 0, Math.PI / 3],
  ha3: [Math.PI / 2, 0, (2 * Math.PI) / 3],
};

const AxisLine = ({ position, color, rotation }) => {
  // const mesh = useRef(null);
  // useFrame(() => (mesh.current.rotation.x += 0.005));
  return (
    <mesh castShadow position={position} rotation={rotation}>
      <cylinderBufferGeometry attach="geometry" args={basicArgs} />
      <meshStandardMaterial attach="material" side="DoubleSide" color={color} />
    </mesh>
  );
};

const SquareDecorator = () => {
  const edgeLength = 0.4;
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
    <mesh castShadow position={[0, 0, 2.3]}>
      <extrudeGeometry attach="geometry" args={[square, extrudeSettings]} />
      <meshStandardMaterial attach="material" color="red" />
    </mesh>
  );
};

softShadows();

function AnimateTest() {
  return (
    <div className="AnimationTest">
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [-5, 2, 10], fov: 70 }}
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

        <AxisLine
          position={[0, 0, 0]}
          color="gray"
          rotation={axisRotations.ha1}
        />
        <AxisLine
          position={[0, 0, 0]}
          color="gray"
          rotation={axisRotations.ha2}
        />
        <AxisLine
          position={[0, 0, 0]}
          color="gray"
          rotation={axisRotations.ha3}
        />
        <AxisLine
          position={[0, 0, 0]}
          color="gray"
          rotation={axisRotations.y}
        />
        <SquareDecorator />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default AnimateTest;
