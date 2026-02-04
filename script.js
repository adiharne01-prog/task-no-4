/* ===== PORTFOLIO ===== */
function contactMe() {
  alert("Thanks for reaching out! I’ll get back to you soon.");
}

/* ===== TODO APP ===== */
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {
  const input = document.getElementById("taskInput");
  if (input.value.trim() === "") return;

  tasks.push(input.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
  showTasks();
}

function showTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;
    list.appendChild(li);
  });
}

showTasks();

/* ===== PRODUCTS ===== */
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mobile", price: 20000 },
  { name: "Headphones", price: 3000 }
];

function displayProducts(items) {
  const div = document.getElementById("productList");
  div.innerHTML = "";

  items.forEach(p => {
    const item = document.createElement("p");
    item.textContent = `${p.name} - ₹${p.price}`;
    div.appendChild(item);
  });
}

function sortProducts(type) {
  let sorted = [...products];

  if (type === "low") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (type === "high") {
    sorted.sort((a, b) => b.price - a.price);
  }

  displayProducts(sorted);
}

displayProducts(products);
