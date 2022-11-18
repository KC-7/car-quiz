const startButton = document.getElementById('start-button')
const quizQuestion = document.getElementById('question-div')
const quizOptions = document.getElementById('quiz-options')

startButton.addEventListener('click', startQuiz)

/**
 * Activated when user clicks start.
 */
function startQuiz() {
  console.log('The quiz has started, please select an answer, good luck!')
  startButton.classList.add('hide')
  quizQuestion.classList.remove('hide')
  quizOptions.classList.remove('hide')
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

  console.log('The page has loaded and the quiz is ready to start!')