import React from "react";
import * as THREE from "three";
import basicArgsObj from "./BasicParams";

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
          opacity={0.6}
          transparent="true"
          depthWrite={true}
        />
      </mesh>
    </group>
  );
};

export default MirrorPlane;
