// Your code here

window.addEventListener("DOMContentLoaded", () => {
  // alert("DOM has loaded");

  const redInput = document.getElementById("red-input");

  const changeRed = (e) => {
    // console.log(e.target.value);
    let value = e.target.value.trim().toLowerCase();

    if (value === "red") {
      redInput.style.backgroundColor = "red";
    } else {
      redInput.style.backgroundColor = "transparent";
    }
  };

  redInput.addEventListener("input", changeRed);

  const addItem = document.getElementById("add-item");

  const ul = document.querySelector("ul");

  const addLi = (e) => {
    const input = document.querySelector("#list-add");

    const newLi = document.createElement("li");

    newLi.innerText = input.value;

    ul.appendChild(newLi);

    input.value = "";
  };

  addItem.addEventListener("click", addLi);

  const colorSelect = document.getElementById("color-select");

  const changeColor = (e) => {
    const section = document.querySelector("#section-3");
    // console.log(e.target.value);

    section.style.backgroundColor = e.target.value;
  };

  colorSelect.addEventListener("input", changeColor);

  const removeListeners = document.getElementById("remove-listeners");

  removeListeners.addEventListener("click", () => {
    redInput.removeEventListener("input", changeRed);
    addItem.removeEventListener("click", addLi);
    colorSelect.removeEventListener("input", changeColor);
  });
});
