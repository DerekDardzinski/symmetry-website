import generatorMatrices from "../Generators";

const cubicGroup = {
  _m3barm: [
    generatorMatrices.d,
    generatorMatrices.g,
    generatorMatrices.h,
    generatorMatrices.l,
  ],
  _4bar3m: [generatorMatrices.d, generatorMatrices.m, generatorMatrices.l],
  _432: [generatorMatrices.d, generatorMatrices.g],
  _m3bar: [generatorMatrices.c, generatorMatrices.d, generatorMatrices.h],
  _23: [generatorMatrices.c, generatorMatrices.d],
};

export default cubicGroup;
