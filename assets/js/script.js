const startButton = document.getElementById('start-button')
const nextButton = document.getElementById('next-question-button')
const quizQuestion = document.getElementById('question-div')
const questionElement = document.getElementById('question')
const optionButtons = document.getElementById('quiz-options')

// The below variables are assigned in the startQuiz function. They are used to randomize the order of the questions. 
let shuffleQuestions, currentQuestionIndex

//Event Listeners
startButton.addEventListener('click', startQuiz)

nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  nextQuestion()
})

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
  if (shuffleQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Try Again?'
    startButton.classList.remove('hide')
  }
  nextButton.classList.remove('hide')
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
    question: 'Which car company manufacturered the Countach?',
    options: [
      { text:'Fiat', correct: false },
      { text:'Ferrari', correct: false },
      { text:'Alfa Romeo', correct: false },
      { text:'Lamborghini', correct: true }
    ]
  },
  {
    question: 'Which car company manufacturered the i8?',
    options: [
      { text:'Audi', correct: false },
      { text:'BMW', correct: true },
      { text:'Jaguar', correct: false },
      { text:'Lexus', correct: false }
    ]
  },
  {
    question: 'When was the first speeding ticket issued?',
    options: [
      { text:'1902', correct: true },
      { text:'1926', correct: false },
      { text:'1943', correct: false },
      { text:'1961', correct: false }
    ]
  },
  {
    question: '3 of the 4 options are the same car, which one is not the same?',
    options: [
      { text:'Toyota GT86', correct: false },
      { text:'Lexus LFA', correct: true },
      { text:'Scion FRS', correct: false },
      { text:'Subaru BRZ', correct: false }
    ]
  }
  ]

  console.log('The page has loaded and the quiz is ready to start!')