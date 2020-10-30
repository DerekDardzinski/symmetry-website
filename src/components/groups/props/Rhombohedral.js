import {
  axisRotations,
  planeRotations,
  pColor,
  rotColor,
  axColor,
} from "../../build/AxesProps";

const rhombohedralAxes = {
  _3barm: {
    a1: {
      rotationSym: 2,
      axisRotation: axisRotations.a1,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [planeRotations.four],
      hasPlane: true,
    },
    a2: {
      rotationSym: 2,
      axisRotation: axisRotations.a2,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [planeRotations.four],
      hasPlane: true,
    },
    a3: {
      rotationSym: 2,
      axisRotation: axisRotations.a3,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [planeRotations.four],
      hasPlane: true,
    },
    z: {
      rotationSym: 3,
      axisRotation: axisRotations.z,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
  },
  _3m: {
    a1: {
      rotationSym: 1,
      axisRotation: axisRotations.a1,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
    a2: {
      rotationSym: 1,
      axisRotation: axisRotations.a2,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
    a3: {
      rotationSym: 1,
      axisRotation: axisRotations.a3,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [],
      hasPlane: false,
    },
    z: {
      rotationSym: 3,
      axisRotation: axisRotations.z,
      rotationColor: rotColor,
      planeColor: pColor,
      axisColor: axColor,
      planes: [
        planeRotations.three0,
        planeRotations.three1,
        planeRotations.three2,
      ],
      hasPlane: true,
    },
  },
};

export default rhombohedralAxes;
