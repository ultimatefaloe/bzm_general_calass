let x = 30
let y = 20

if (x < y) {
  console.log("x is less than y")
} else {
  console.log("x is greater than or equal to y")
}

let grade = 'D';

if (grade === '70') {
  console.log("Excellent!")
} else if (grade === 'B') {
  console.log("Good job!")
} else if (grade === 'C') {
  console.log("You can do better.")
} else {
  console.log("Invalid grade.")
}


let score = 'C';

switch (score) {
  case 'A':
    console.log("Excellent!");
    break;
  case 'B':
    console.log("Good job!");
    break;
  case 'C':
    console.log("You can do better.");
    break;
  default:
    console.log("Invalid score.");
}