function changeClass() {
  let element = document.querySelector(".oldClass");
  console.log("Old class name:", element.className);
  element.className = "newClass";
  element.textContent = "I am doing CS";
  console.log("New class name:", element.className);
}