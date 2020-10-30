import React from "react";
import * as THREE from "three";
import basicArgsObj from "./BasicParams";

const MirrorPlane = ({ axisRotation, color, planeRotation, hexagon }) => {
  const edgeLength = basicArgsObj.height / 1.2;
  let mirrorShape;
  if (hexagon) {
    mirrorShape = new THREE.Shape();
    mirrorShape.moveTo(0, edgeLength / 2);
    mirrorShape.lineTo((-edgeLength * Math.sqrt(3)) / 4, edgeLength / 4);
    mirrorShape.lineTo((-edgeLength * Math.sqrt(3)) / 4, -edgeLength / 4);
    mirrorShape.moveTo(0, -edgeLength / 2);
    mirrorShape.lineTo((edgeLength * Math.sqrt(3)) / 4, -edgeLength / 4);
    mirrorShape.lineTo((edgeLength * Math.sqrt(3)) / 4, edgeLength / 4);
  } else {
    mirrorShape = new THREE.Shape();
    mirrorShape.moveTo(edgeLength / 2, edgeLength / 2);
    mirrorShape.lineTo(edgeLength / 2, edgeLength / 2 - edgeLength);
    mirrorShape.lineTo(
      edgeLength / 2 - edgeLength,
      edgeLength / 2 - edgeLength
    );
    mirrorShape.lineTo(edgeLength / 2 - edgeLength, edgeLength / 2);
  }

  var extrudeSettings = {
    steps: 5,
    depth: 0.05,
    bevelEnabled: false,
  };
  return (
    <group position={[0, 0, 0]} rotation={axisRotation}>
      <mesh position={[-0.025, 0, -0.025]} rotation={planeRotation}>
        <extrudeGeometry
          attach="geometry"
          args={[mirrorShape, extrudeSettings]}
        />
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
