import generatorMatrices from "../../build/Generators";

const orthorhombicGroups = {
  _mmm: [generatorMatrices.b, generatorMatrices.cy, generatorMatrices.h],
  _mm2: [generatorMatrices.b, generatorMatrices.j],
  _222: [generatorMatrices.b, generatorMatrices.cy],
};

export default orthorhombicGroups;
