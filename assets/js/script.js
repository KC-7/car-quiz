const startButton = document.getElementById('start-button')
const quizQuestion = document.getElementById('question-div')
const quizOptions = document.getElementById('quiz-options')
const questionElement = document.getElementById('question')
const optionButtons = document.getElementsByClassName('option-button')

// The below variables are assigned in the startQuiz function. They are used to randomize the order of the questions. 
let shuffleQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz)

/**
 * Activated when user clicks start.
 */
function startQuiz() {
  console.log('The quiz has started, please select an answer, good luck!') // Logs message to console
  startButton.classList.add('hide') // Hides the Start Button
  quizQuestion.classList.remove('hide') // Shows Quiz Question
  quizOptions.classList.remove('hide') // Shows Quiz Options
  shuffleQuestions = questions.sort(() => Math.random() -.5) // Randomizes the order of the questions array
  currenntQuestionIndex = 0 // We are starting the list of questions from 0
  nextQuestion() // Initiates the nextQuestion Function
}

function nextQuestion() {
  displayQuestion(shuffleQuestions[currentQuestionIndex])
}

function displayQuestion(question) {
  questionElement.innerHTML = question.question
}

function selectOption() {

}

const questions = [
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

  /**
   * {
    "question": "",
    "option-a": "Fiat",
    "option-b": "",
    "option-c": "",
    "option-d": "",
  },
  {
    "question": "What manufacturer made the i8",
    "option-a": "Audi",
    "option-b": "Jaguar",
    "option-c": "Lexus",
    "option-d": "BMW",
    "correct": "BMW"
  }



    {
    question: 'Which manufacturer made the Countach',
    options: [
      { text:'Fiat', correct: false },
      { text:'Ferrari', correct: false },
      { text:'Alfa Romeo', correct: false },
      { text:'Lamborghini', correct: true },
    ]
  },
  {
    question: 'Which manufacturer made the i8',
    options: [
      { text:'Audi', correct: false },
      { text:'BMW', correct: true },
      { text:'Jaguar', correct: false },
      { text:'Lexus', correct: false },
    ]
  }
   */