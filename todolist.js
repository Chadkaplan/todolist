"use strict"
const container = document.querySelector(".container")

const toDoItem = document.querySelector(".todoitem")

const btn = document.querySelector(".btn")

let list = document.querySelector(".ullist")

let storage = []
loadTasks()
function loadTasks() {
  console.log("start")
  // Get existing tasks from local storage
  let tasks = JSON.parse(localStorage.getItem("items")) || []
  storage.push(...tasks)
  // Update the task list on the page by looping through tasks variable
  for (let i = 0; i < tasks.length; i++) {
    let newElement = document.createElement("li")
    newElement.innerHTML = '<input type="checkbox" class="check" /> <button>delete</button>' + tasks[i]
    list.append(newElement)
  }
}

btn.addEventListener("click", function () {
  console.log("click")
  let newElement = document.createElement("li")
  // newElement.innerText = `${toDoItem.innerHTML}`;
  newElement.innerHTML =
    '<input type="checkbox" class="check" />' + toDoItem.value
  // newElement.innerText = toDoItem.value;
  list.append(newElement)

  const allCheckBox = document.querySelectorAll(".check")

  for (let i = 0; i < allCheckBox.length; i++) {
    let checkbox = allCheckBox[i]
    checkbox.addEventListener("click", function (e) {
      e.target.parentElement.classList.toggle("check")
    })
  }

  storage.push(newElement.textContent)
  console.log(newElement.innerText)
  localStorage.setItem("items", JSON.stringify(storage))
  console.log(storage)
})

console.log(localStorage)