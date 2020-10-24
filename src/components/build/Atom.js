import React from "react";
// import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from "three";

const Atom = ({ color, position }) => {
  return (
    <mesh castShadow position={position}>
      <sphereBufferGeometry attach="geometry" args={[0.15, 30, 30]} />
      <meshStandardMaterial
        side={THREE.DoubleSide}
        attach="material"
        color={color}
      />
    </mesh>
  );
};

export default Atom;
