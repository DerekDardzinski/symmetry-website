import generatorMatrices from "../../build/Generators";

const cubicGroup = {
  _m3barm: [
    generatorMatrices.d,
    generatorMatrices.g,
    generatorMatrices.h,
    generatorMatrices.l,
  ],
  _4bar3m: [generatorMatrices.d, generatorMatrices.m, generatorMatrices.l],
  _432: [
    generatorMatrices.d,
    generatorMatrices.k2,
    generatorMatrices.cy,
    generatorMatrices.b,
  ],
  _m3bar: [
    generatorMatrices.c,
    generatorMatrices.cy,
    generatorMatrices.d,
    generatorMatrices.h,
  ],
  _23: [generatorMatrices.b, generatorMatrices.cy, generatorMatrices.d],
};

export default cubicGroup;
