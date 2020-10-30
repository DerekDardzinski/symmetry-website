import {
  axisRotations,
  planeRotations,
  pColor,
  rotColor,
  axColor,
} from "../../build/AxesProps";

const triclinicAxes = {
  _2: {
    x: {
      rotationSym: 1,
      axisRotation: axisRotations.x,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
    y: {
      rotationSym: 1,
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
  _2om: {
    x: {
      rotationSym: 1,
      axisRotation: axisRotations.x,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [planeRotations.two],
      hasPlane: true,
    },
    y: {
      rotationSym: 1,
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
  _m: {
    x: {
      rotationSym: 1,
      axisRotation: axisRotations.x,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
    y: {
      rotationSym: 1,
      axisRotation: axisRotations.y,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
    z: {
      rotationSym: 1,
      axisRotation: axisRotations.z,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [planeRotations.two],
      hasPlane: true,
    },
  },
};

export default triclinicAxes;
