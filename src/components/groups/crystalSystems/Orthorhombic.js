import generatorMatrices from "../Generators";

const orthorhombicGroups = {
  _mmm: [generatorMatrices.b, generatorMatrices.c, generatorMatrices.h],
  _mm2: [generatorMatrices.b, generatorMatrices.j],
  _222: [generatorMatrices.b, generatorMatrices.j],
};

export default orthorhombicGroups;
