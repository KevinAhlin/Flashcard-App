// Selecting DOM elements
const container = document.querySelector(".container")
const addQuestionCard = document.getElementById("add-card-modal")
const cardButton = document.getElementById("save-btn")
const question = document.getElementById("question")
const answer = document.getElementById("answer")
const errorMessage = document.getElementById("error")
const addQuestion = document.getElementById("add-card")
const closeBtn = document.getElementById("close-btn")

// Initializing variables
let editBool = false
let original = null
let flashcard = JSON.parse(localStorage.getItem("flashcard")) || []

addQuestion.addEventListener("click", () => {
  // Show the add question modal and hide the container
  container.classList.add("hide")
  question.value = ""
  answer.value = ""
  addQuestionCard.classList.remove("hide")
})
