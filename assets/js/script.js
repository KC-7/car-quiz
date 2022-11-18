const startButton = document.getElementById('start-button')
const nextButton = document.getElementById('next-question-button')
const quizQuestion = document.getElementById('question-div')
const questionElement = document.getElementById('question')
const optionButtons = document.getElementById('quiz-options')

// The below variables are assigned in the startQuiz function. They are used to randomize the order of the questions. 
let shuffleQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz)

/**
 * Activates when user clicks start quiz button.
 */
function startQuiz() {
  console.log('The quiz has started, good luck!') // Logs message to console
  startButton.classList.add('hide') // Hides the Start Button
  quizQuestion.classList.remove('hide') // Shows Quiz Question
  shuffleQuestions = questions.sort(() => Math.random() -.5) // Randomizes the order of the questions array
  currentQuestionIndex = 0 // We are starting the list of questions from 0
  nextQuestion() // Initiates the nextQuestion Function
}

/**
 * Activates when the startQuiz or XXXX Function has been called. 
 */
function nextQuestion() {
  resetOptions()
  displayQuestion(shuffleQuestions[currentQuestionIndex]) 
}

function displayQuestion(question) {
  questionElement.innerHTML = question.question
  question.options.forEach(option => {
    const button = document.createElement('button')
    button.innerText = option.text
    button.classList.add('option-button')
    if (option.correct) {
      button.dataset.correct = option.correct
    }
    button.addEventListener('click', selectOption)
    optionButtons.appendChild (button)
  })
}

function resetOptions() {
  nextButton.classList.add('hide')
  while (optionButtons.firstChild) {
    optionButtons.removeChild
    (optionButtons.firstChild)
  }

}

function selectOption(e) {
  const userSelection = e.target
  const correct = userSelection.dataset.correct
  scoreSelection(document.body, correct)
  Array.from(optionButtons.children).forEach(button => {
    scoreSelection(button, button.dataset.correct)
  })
}

function scoreSelection(element, correct) {
  clearScore(element)
  if (correct) {
    element.classList.add('right')
  } else {
    element.classList.add('wrong')
  }
}

function clearScore(element) {
  element.classList.remove('right')
  element.classList.remove('wrong')
}


// List of the Questions & Answers in the Quiz
const questions = [
  {
    question: 'Which manufacturer made the Countach?',
    options: [
      { text:'Fiat', correct: false },
      { text:'Ferrari', correct: false },
      { text:'Alfa Romeo', correct: false },
      { text:'Lamborghini', correct: true }
    ]
  },
  {
    question: 'Which manufacturer made the i8?',
    options: [
      { text:'Audi', correct: false },
      { text:'BMW', correct: true },
      { text:'Jaguar', correct: false },
      { text:'Lexus', correct: false }
    ]
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
      { text:'Lamborghini', correct: true }
    ]
  },
  {
    question: 'Which manufacturer made the i8',
    options: [
      { text:'Audi', correct: false },
      { text:'BMW', correct: true },
      { text:'Jaguar', correct: false },
      { text:'Lexus', correct: false }
    ]
  }
   */