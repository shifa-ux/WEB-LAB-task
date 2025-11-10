// Create array of software houses
let companies = ["ABC Software", "XYZ Tech", "SoftWorld", "NextStep", "CodeBase"];
console.log("Original Array:", companies);
//  Remove the first name
companies.shift();
console.log("After removing first name:", companies);
//  Remove name from middle position and add a new name
let middle = Math.floor(companies.length / 2);
companies.splice(middle, 1, "SmartSoft");
console.log("After replacing middle name:", companies);
//  Add a new name at the end
companies.push("NewVision");
console.log("After adding new name at end:", companies);
