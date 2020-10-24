const axisRotations = {
  x: [0, 0, Math.PI / 2],
  y: [0, 0, 0],
  z: [Math.PI / 2, 0, 0],
  xy: [0, 0, Math.PI / 4],
  nxy: [0, 0, -Math.PI / 4],
  xz: [Math.PI / 4, 0, Math.PI / 2],
  nxz: [-Math.PI / 4, 0, Math.PI / 2],
  yz: [Math.PI / 4, 0, 0],
  nyz: [-Math.PI / 4, 0, 0],
  mmm_ppp: [0, -Math.PI / 4, -Math.PI / 3.3],
  mmp_ppm: [0, Math.PI / 4, -Math.PI / 3.3],
  mpm_pmp: [0, -Math.PI / 4, Math.PI / 3.3],
  mpp_pmm: [0, Math.PI / 4, Math.PI / 3.3],
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
  three: [0, Math.PI / 3, 0],
};
