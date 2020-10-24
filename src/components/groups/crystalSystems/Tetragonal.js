import generatorMatrices from "../Generators";

const tetragonalGroups = {
  _4ommm: [generatorMatrices.c, generatorMatrices.g, generatorMatrices.h],
  _4bar2m: [generatorMatrices.c, generatorMatrices.m],
  _4mm: [generatorMatrices.g, generatorMatrices.j],
  _422: [generatorMatrices.c, generatorMatrices.g],
  _4om: [generatorMatrices.g, generatorMatrices.h],
  _4bar: [generatorMatrices.m],
  _4: [generatorMatrices.g],
};

export default tetragonalGroups;
