import {
  axisRotations,
  planeRotations,
  pColor,
  rotColor,
  axColor,
} from "../../build/AxesProps";

const orthorhombicAxes = {
  _mmm: {
    x: {
      rotationSym: 2,
      axisRotation: axisRotations.x,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [planeRotations.two],
      hasPlane: true,
    },
    y: {
      rotationSym: 2,
      axisRotation: axisRotations.y,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [planeRotations.four],
      hasPlane: true,
    },
    z: {
      rotationSym: 2,
      axisRotation: axisRotations.z,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [planeRotations.two],
      hasPlane: true,
    },
  },
  _mm2: {
    x: {
      rotationSym: 1,
      axisRotation: axisRotations.x,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [planeRotations.four],
      hasPlane: true,
    },
    y: {
      rotationSym: 1,
      axisRotation: axisRotations.y,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [planeRotations.four],
      hasPlane: true,
    },
    z: {
      rotationSym: 2,
      axisRotation: axisRotations.z,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
  },
  _222: {
    x: {
      rotationSym: 2,
      axisRotation: axisRotations.x,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
    y: {
      rotationSym: 2,
      axisRotation: axisRotations.y,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
    z: {
      rotationSym: 2,
      axisRotation: axisRotations.z,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
  },
};

export default orthorhombicAxes;
