import React from "react";
import * as THREE from "three";
import { Line } from "drei";
import basicArgsObj from "../BasicParams";

const basicArgs = [
  basicArgsObj.radiusTop,
  basicArgsObj.radiusBottom,
  basicArgsObj.height / 2,
  basicArgsObj.radialSegments,
  basicArgsObj.heightSegments,
  basicArgsObj.openEnded,
  basicArgsObj.thetaStart,
  basicArgsObj.thetaLength,
];

const RhombohedralCell = () => {
  const edgeLength = basicArgsObj.height / 1.5;
  const a = edgeLength;
  const b = edgeLength;
  const c = edgeLength * Math.sin(Math.PI / 3);
  const ashift = (a * Math.sin(Math.PI / 4)) / 2;
  const bshift = (b * Math.cos(Math.PI / 4)) / 2;
  const points = [
    [0, 0, 0],
    [a * Math.sin(Math.PI / 12), b * Math.cos(Math.PI / 12), 0],
    [
      a * (Math.sin(Math.PI / 12) + Math.cos(Math.PI / 12)),
      b * (Math.sin(Math.PI / 12) + Math.cos(Math.PI / 12)),
      0,
    ],
    [a * Math.cos(Math.PI / 12), b * Math.sin(Math.PI / 12), 0],
    [0, 0, 0],
    [ashift, bshift, c],
    [
      a * Math.sin(Math.PI / 12) + ashift,
      b * Math.cos(Math.PI / 12) + bshift,
      c,
    ],
    [
      a * (Math.sin(Math.PI / 12) + Math.cos(Math.PI / 12)) + ashift,
      b * (Math.sin(Math.PI / 12) + Math.cos(Math.PI / 12)) + bshift,
      c,
    ],
    [
      a * Math.cos(Math.PI / 12) + ashift,
      b * Math.sin(Math.PI / 12) + bshift,
      c,
    ],
    [ashift, bshift, c],
    [
      a * Math.sin(Math.PI / 12) + ashift,
      b * Math.cos(Math.PI / 12) + bshift,
      c,
    ],
    [a * Math.sin(Math.PI / 12), b * Math.cos(Math.PI / 12), 0],
    [
      a * (Math.sin(Math.PI / 12) + Math.cos(Math.PI / 12)),
      b * (Math.sin(Math.PI / 12) + Math.cos(Math.PI / 12)),
      0,
    ],
    [
      a * (Math.sin(Math.PI / 12) + Math.cos(Math.PI / 12)) + ashift,
      b * (Math.sin(Math.PI / 12) + Math.cos(Math.PI / 12)) + bshift,
      c,
    ],
    [
      a * Math.cos(Math.PI / 12) + ashift,
      b * Math.sin(Math.PI / 12) + bshift,
      c,
    ],
    [a * Math.cos(Math.PI / 12), b * Math.sin(Math.PI / 12), 0],
  ];
  // rotation={[Math.PI / 3.3, -Math.PI / 1.8, -Math.PI / 5.5]}
  //rotation={[0, Math.PI / 2.7, (2.95 * Math.PI) / 4]}
  return (
    <group rotation={[0, Math.PI / 2.7, (2.95 * Math.PI) / 4]}>
      <group position={[-(a + ashift) / 1.5, -(b + bshift) / 2.5, -c / 0.8]}>
        <Line
          points={points} // Array of points
          color="grey" // Default
          lineWidth={5} // In pixels (default)
          dashed={false} // Default
        />
      </group>
    </group>
  );
};

export default RhombohedralCell;
