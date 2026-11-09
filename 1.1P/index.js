// SIT725 1.1P: JavaScript and Node.js basics

// Variables and data types
const unitName = "SIT725";
const weekNumber = 1;
const isOnline = false;

console.log(`Welcome to ${unitName} - Week ${weekNumber} (online: ${isOnline})`);

// Functions
function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

const multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;

console.log("add(5, 3) =", add(5, 3));
console.log("multiply(4, 6) =", multiply(4, 6));

// Conditional logic
function gradeFor(mark) {
  if (mark >= 80) return "HD";
  if (mark >= 70) return "D";
  if (mark >= 60) return "C";
  if (mark >= 50) return "P";
  return "N";
}

console.log("Grade for 85:", gradeFor(85));

// Arrays and loops
const technologies = [
  "JavaScript",
  "Node.js",
  "HTML",
  "CSS",
  "Materialize",
  "Git",
  "GitHub",
];

technologies.forEach((technology, index) => {
  console.log(`${index + 1}. ${technology}`);
});

// Array methods
const marks = [72, 88, 65, 91, 54];
const averageMark = marks.reduce((total, mark) => total + mark, 0) / marks.length;
const passingGrades = marks.filter((mark) => mark >= 50).map(gradeFor);

console.log("Average mark:", averageMark.toFixed(1));
console.log("Grades:", passingGrades.join(", "));

// Objects
const student = {
  name: "Sahil Navin",
  id: "223288163",
  course: "Master of Cybersecurity",
  introduce() {
    return `Hi, I'm ${this.name} (${this.id}) studying ${this.course}.`;
  },
};

console.log(student.introduce());

// Async functions and promises
function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function showCompletionMessage() {
  console.log("Waiting 1 second...");
  await wait(1000);
  console.log("Done - program executed successfully.");
}

showCompletionMessage();
