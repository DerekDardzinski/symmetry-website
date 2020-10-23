import { matrix, multiply, squeeze } from "mathjs";

const generators = {
  g: matrix([
    [0, -1, 0],
    [1, 0, 0],
    [0, 0, 1],
  ]),
  h: matrix([
    [-1, 0, 0],
    [0, -1, 0],
    [0, 0, -1],
  ]),
};

const generalPoint = matrix([[1], [0.5], [0.3]]);

// function compareArrays(arrayList, array) {
// for
// }

function applyGenerator(generator, generalPoint) {
  let pointObjects = [];
  let points = [];
  let closed = false;
  while (!closed) {
    let pointObject;
    let point;
    if (pointObjects.length === 0) {
      pointObject = multiply(generator, generalPoint);
      point = squeeze(pointObject)._data;
    } else {
      pointObject = multiply(generator, pointObjects.slice(-1)[0]);
      point = squeeze(pointObject)._data;
    }
    if (!JSON.stringify(points).includes(JSON.stringify(point))) {
      pointObjects.push(pointObject);
      points.push(point);
    } else {
      closed = true;
    }
  }
  return [points, pointObjects];
}

function generatePointGroup(generators, generalPoint) {
  let totalPointObjects = [];
  let totalPoints = [];
  let groupPoints;
  let groupPointObjects;
  for (var k = 0; k < generators.length; k++) {
    if (totalPointObjects.length === 0) {
      [groupPoints, groupPointObjects] = applyGenerator(
        generators[k],
        generalPoint
      );
      totalPointObjects.push.apply(totalPointObjects, groupPointObjects);
      totalPoints.push.apply(totalPoints, groupPoints);
    } else {
      let tempPoints = [];
      let tempPointObjects = [];
      for (var i = 0; i < totalPointObjects.length; i++) {
        [groupPoints, groupPointObjects] = applyGenerator(
          generators[k],
          totalPointObjects[i]
        );
        tempPoints.push.apply(tempPoints, groupPoints);
        tempPointObjects.push.apply(tempPointObjects, groupPointObjects);
      }
      for (var j = 0; j < tempPoints.length; j++) {
        if (
          !JSON.stringify(totalPoints).includes(JSON.stringify(tempPoints[j]))
        ) {
          totalPoints.push(tempPoints[j]);
          totalPointObjects.push(tempPointObjects[j]);
        }
      }
    }
  }
  return totalPoints;
}

export default generatePointGroup;
