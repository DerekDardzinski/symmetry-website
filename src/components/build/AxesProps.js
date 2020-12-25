const axisRotations = {
  x: [0, 0, Math.PI / 2],
  y: [0, 0, 0],
  z: [Math.PI / 2, 0, 0],
  xy: [0, 0, Math.PI / 4],
  nxy: [0, 0, -Math.PI / 4],
  xz: [0, Math.PI / 4, Math.PI / 2],
  nxz: [0, -Math.PI / 4, Math.PI / 2],
  yz: [Math.PI / 4, 0, 0],
  nyz: [-Math.PI / 4, 0, 0],
  nnn_ppp: [0, -Math.PI / 3.95, -Math.PI / 3.29],
  nnp_ppn: [0, Math.PI / 3.95, -Math.PI / 3.29],
  npn_pnp: [0, -Math.PI / 3.95, Math.PI / 3.29],
  npp_pnn: [0, Math.PI / 3.95, Math.PI / 3.29],
  a1: [0, 0, 0],
  a12: [0, 0, Math.PI / 6],
  a2: [0, 0, Math.PI / 3],
  a23: [0, 0, Math.PI / 2],
  a3: [0, 0, (2 * Math.PI) / 3],
  a13: [0, 0, (5 * Math.PI) / 6],
};

const planeRotations = {
  two: [0, 0, 0],
  four: [0, Math.PI / 2, 0],
  fourdu: [0, Math.PI / 4, 0],
  fourdd: [0, -Math.PI / 4, 0],
  three0: [0, 0, 0],
  three1: [0, Math.PI / 3, 0],
  three2: [0, (2 * Math.PI) / 3, 0],
};

// const pColor = "#BDEFEA";
// const pColor = "#6da37c";
const pColor = "#92b39b";
const atomColor = "black";
// const rotColor = "#02223C";
const rotColor = "black";
const axColor = "gray";

export { axisRotations, planeRotations, pColor, atomColor, rotColor, axColor };
