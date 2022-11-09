let course1 = {
  code: "ACIT 1620",
  name: "Fundamental Web Technologies",
};

let course2 = {
  code: "ACIT 1420",
  name: "Introduction to System Administration",
};

let course3 = {
  code: "MATH 1310",
  name: "Technical Math for IT",
};

const courseList = [course1, course2, course3];

let condition = false;
let input;
do {
  input = prompt("Enter 4 digit code");
} while (isNaN(Number(input)) || input.length !== 4);

for (courses of courseList) {
  if (courses.code.includes(input)) {
    console.log(`Yes I am taking the course: ${courses.code} ${courses.name}`);
    condition == true;
  }
}
if (condition == false) {
  courseList.push({ code: input, name: null });
  console.log("success");
}
