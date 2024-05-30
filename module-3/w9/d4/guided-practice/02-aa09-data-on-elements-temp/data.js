// Your code here






window.addEventListener("DOMContentLoaded", (e) => {
  const addButton = document.getElementById("add");

  addButton.addEventListener("click", (e) => {

    // e.preventDefault();

    const shoppingList = document.getElementById("shopping-list");

    const name = document.getElementById("name");

    const type = document.getElementById("type");

    const li = document.createElement("li");

    li.innerText = name.value;

    li.dataset.type = type.value;

    shoppingList.appendChild(li);
  });
});
