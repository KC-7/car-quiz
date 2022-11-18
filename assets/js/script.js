const startButton = document.getElementById('start-button')

startButton.addEventListener('click', startQuiz)

/**
 * Activated when user clicks start.
 */
function startQuiz() {
  console.log('The quiz has started')
  startButton.classList.add('hide')
}

function nextQuestion() {

}

function selectOption() {

}

const QUESTIONS = [
  {
    "question": "What manufacturer made the Countach",
    "option-a": "Fiat",
    "option-b": "Ferrari",
    "option-c": "Lamborghini",
    "option-d": "Alfa Romeo",
    "correct": "Lamborghini"
  },
  {
    "question": "What manufacturer made the i8",
    "option-a": "Audi",
    "option-b": "Jaguar",
    "option-c": "Lexus",
    "option-d": "BMW",
    "correct": "BMW"
  }
  ]