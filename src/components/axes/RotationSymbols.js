import React from "react";
import * as THREE from "three";

const SixFold = ({ rotation, color, height }) => {
  const edgeLength = 0.6;
  var hexagon = new THREE.Shape();
  hexagon.moveTo(0, edgeLength / 2);
  hexagon.lineTo((-edgeLength * Math.sqrt(3)) / 4, edgeLength / 4);
  hexagon.lineTo((-edgeLength * Math.sqrt(3)) / 4, -edgeLength / 4);
  hexagon.moveTo(0, -edgeLength / 2);
  hexagon.lineTo((edgeLength * Math.sqrt(3)) / 4, -edgeLength / 4);
  hexagon.lineTo((edgeLength * Math.sqrt(3)) / 4, edgeLength / 4);

  var extrudeSettings = {
    steps: 5,
    depth: 0.05,
    bevelEnabled: false,
  };
  return (
    <group rotation={rotation}>
      <mesh castShadow position={[0, height, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <extrudeGeometry attach="geometry" args={[hexagon, extrudeSettings]} />
        <meshStandardMaterial attach="material" color={color} />
      </mesh>
    </group>
  );
};

const FourFold = ({ rotation, color, height }) => {
  const edgeLength = 0.5;
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
    <group rotation={rotation}>
      <mesh castShadow position={[0, height, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <extrudeGeometry attach="geometry" args={[square, extrudeSettings]} />
        <meshStandardMaterial attach="material" color={color} />
      </mesh>
    </group>
  );
};

const ThreeFold = ({ rotation, color, height }) => {
  const edgeLength = 0.4;
  var triangle = new THREE.Shape();
  triangle.moveTo(0, edgeLength);
  triangle.lineTo((edgeLength * Math.sqrt(3)) / 2, -edgeLength / 2);
  triangle.lineTo((-edgeLength * Math.sqrt(3)) / 2, -edgeLength / 2);

  var extrudeSettings = {
    steps: 5,
    depth: 0.05,
    bevelEnabled: false,
  };
  return (
    <group rotation={rotation}>
      <mesh castShadow position={[0, height, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <extrudeGeometry attach="geometry" args={[triangle, extrudeSettings]} />
        <meshStandardMaterial attach="material" color={color} />
      </mesh>
    </group>
  );
};

const TwoFold = ({ rotation, color, height }) => {
  var ellipse = new THREE.EllipseCurve(0, 0, 0.2, 0.35, 0, Math.PI * 2);
  var ellipseShape = new THREE.Shape(ellipse.getPoints(50));

  var extrudeSettings = {
    steps: 5,
    depth: 0.05,
    bevelEnabled: false,
  };
  return (
    <group rotation={rotation}>
      <mesh castShadow position={[0, height, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <extrudeGeometry
          attach="geometry"
          args={[ellipseShape, extrudeSettings]}
        />
        <meshStandardMaterial attach="material" color={color} />
      </mesh>
    </group>
  );
};

export { TwoFold, ThreeFold, FourFold, SixFold };
