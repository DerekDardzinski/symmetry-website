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
  const c = edgeLength;
  const shift = edgeLength / 2;
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
    [0, 0, c],
    [a * Math.sin(Math.PI / 12), b * Math.cos(Math.PI / 12), c],
    [
      a * (Math.sin(Math.PI / 12) + Math.cos(Math.PI / 12)),
      b * (Math.sin(Math.PI / 12) + Math.cos(Math.PI / 12)),
      c,
    ],
    [a * Math.cos(Math.PI / 12), b * Math.sin(Math.PI / 12), c],
    [0, 0, c],
    [a * Math.sin(Math.PI / 12), b * Math.cos(Math.PI / 12), c],
    [a * Math.sin(Math.PI / 12), b * Math.cos(Math.PI / 12), 0],
    [
      a * (Math.sin(Math.PI / 12) + Math.cos(Math.PI / 12)),
      b * (Math.sin(Math.PI / 12) + Math.cos(Math.PI / 12)),
      0,
    ],
    [
      a * (Math.sin(Math.PI / 12) + Math.cos(Math.PI / 12)),
      b * (Math.sin(Math.PI / 12) + Math.cos(Math.PI / 12)),
      c,
    ],
    [a * Math.cos(Math.PI / 12), b * Math.sin(Math.PI / 12), c],
    [a * Math.cos(Math.PI / 12), b * Math.sin(Math.PI / 12), 0],
  ];
  return (
    <group rotation={[Math.PI / 2, 0, 0]}>
      <group position={[-(a + shift) / 2, -(b + shift) / 2, -(c + shift) / 2]}>
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
