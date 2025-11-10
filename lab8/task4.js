let students = [
  { name: "Ali", marks: 45 },
  { name: "Sara", marks: 78 },
  { name: "Ahmed", marks: 60 },
  { name: "Hina", marks: 30 }
];

let passedStudents = students.filter(student => student.marks > 50);

console.log("Students with marks > 50:");
console.log(passedStudents);
