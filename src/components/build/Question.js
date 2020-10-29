import * as THREE from "three";
import React, { useRef } from "react";
import Montserrat from "./Montserrat_Bold.json";
import { useFrame } from "react-three-fiber";

function Text() {
  // parse JSON file with Three
  const font = new THREE.FontLoader().parse(Montserrat);

  // configure font geometry
  const textOptions = {
    font: font,
    size: 4,
    curveSrgments: 20,
    height: 0.1,
    bevelEnabled: true,
    bevelThickness: 0.2,
    bevelSize: 0.1,
    bevelOffset: 0,
    bevelSegments: 12,
  };
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.z += 0.0));

  return (
    <group ref={mesh} rotation={[0, 0, Math.PI / 3.5]}>
      <mesh
        castShadow
        position={[-0.05, -1.6, -2]}
        rotation={[0, Math.PI / 2, Math.PI / 2]}
      >
        <textGeometry attach="geometry" args={["?", textOptions]} />
        <meshStandardMaterial attach="material" color="#878e99" />
      </mesh>
    </group>
  );
}

export default Text;
