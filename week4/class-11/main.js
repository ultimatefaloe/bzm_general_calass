function areaOfTriangle(base, height) {
  let result = (1 / 2) * base * height;
  console.log("Area of triangle: ", result);
}

// areaOfTriangle(10, 4)
// //  BODMAS - Brackets, Order, Division, Multiplication, Addition, Subtraction
areaOfTriangle(12, 16);

// let radius = 7;

// console.log("Area of circle: ", result);

function areaOfCircle(radius) {
  let pi = Math.PI;

  let result = pi * radius * radius;
  console.log("Area of circle: ", result);
}

areaOfCircle(7)
areaOfCircle(10)