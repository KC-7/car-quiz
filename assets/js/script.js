const startButton = document.getElementById('start-button') // This is the Start Button
const quizQuestion = document.getElementById('question-div') // This is the Question & Options Area
const questionElement = document.getElementById('question') // This is the Question
const optionButtons = document.getElementById('quiz-options') // These are the Option Buttons
const nextButton = document.getElementById('next-question-button') // This is the Next Question Button

// The below variables are utilised in the startQuiz and nextButton Functions to randomize the order of the questions
let shuffleQuestions, currentQuestionIndex

//Event Listeners
startButton.addEventListener('click', startQuiz) // Initiates the Start Quiz Function when the Start Button is clicked

nextButton.addEventListener('click', () => { // When the next button is clicked, the next question is displayed and one is added to the current question index
  currentQuestionIndex++
  nextQuestion()
})

/**
 * The startQuiz Function activates when user clicks start quiz button.
 */
function startQuiz() {
  console.log('The quiz has started, good luck!') // Logs message to console
  startButton.classList.add('hide') // Hides the Start Button
  quizQuestion.classList.remove('hide') // Shows Quiz Question
  shuffleQuestions = questions.sort(() => Math.random() - .5) // Randomizes the order of the questions array
  currentQuestionIndex = 0 // Starts with the number of questions asked at 0
  nextQuestion() // Initiates the nextQuestion Function
}

// Activates when the startQuiz Function or the nextButton Event Listener has been called. 
function nextQuestion() {
  console.log('The computer is shuffling the questions.') // Logs message to console
  resetOptions() // Removes unnesecary buttons by calling the resetOptions Function
  displayQuestion(shuffleQuestions[currentQuestionIndex]) // Calls the Display Question Function and Shuffles the remaining questions
}

// Activates when the nextQuestion function has been called. 
function displayQuestion(question) {
  console.log('The question and options have been displayed, please choose wisely.') // Logs message to console
  questionElement.innerHTML = question.question // The question area will be populated by the Question in the Q & A Section
  question.options.forEach(option => {
    const button = document.createElement('button') // Create a button for each of the possible answers provided in the Q & A Section
    button.innerText = option.text // Display the option text in the button
    button.classList.add('option-button') // Add the "Option Button" Class to the buttons
    if (option.correct) {
      button.dataset.correct = option.correct
    }
    button.addEventListener('click', selectOption) // If the button is clicked, intiate "Select Option"
    optionButtons.appendChild(button)
  })
}

// Activated when user clicks next
function resetOptions() {
  clearScore(document.getElementById('nav-bar')) // Removes the right or wrong styling from the Nav Bar
  nextButton.classList.add('hide') // Hides the next button
  while (optionButtons.firstChild) {
    optionButtons.removeChild(optionButtons.firstChild)
  }
}

function selectOption(e) {
  console.log('You have made a selection.') // Logs message to console
  const userSelection = e.target // The User Selection is the target element (i.e. the button the user clicks on)
  const correct = userSelection.dataset.correct  // Correct is when the User Selection is Right
  scoreSelection(document.getElementById('nav-bar'), correct) // Adds the right or wrong styling to the nav bar using the Score Selection Function 
  scoreAlert(correct) // Creates a Pop Up Alert to let the user know if they were correct using the Score Alert Function 
  Array.from(optionButtons.children).forEach(button => {
    scoreSelection(button, button.dataset.correct) // Adds the right or wrong styling to the Options Buttons using the Score Selection Function
  })
  if (shuffleQuestions.length > currentQuestionIndex + 1) { // If there are more questions left to be asked than have currently been asked, it will ask the next one
    console.log('There are still more questions left, click next.') // Logs message to console
    nextButton.classList.remove('hide') // Displays the Next Question button
  } else { // No more questions left
    console.log('Well done, you have made it to the end of the quiz! Try again?') // Logs message to console
    startButton.innerText = 'Try Again?' // Changes the text on the Start Button
    startButton.classList.remove('hide') // Displays the Start Button
    startButton.focus()
    // quizQuestion.classList.add('hide') // Hides the Question & Options
    alert('Well done, you made it to the end of the quiz!'); // Provides a window alert for user 
  }
}

// Adds score styling - right or wrong
function scoreSelection(element, correct) { // It needs the element and to know if it is correct
  clearScore(element)
  //////////////////////////////////////////////////////////////// removeLogo()
  if (correct) {
    element.classList.add('right') // If correct, the right (green) class will be added
  } else {
    element.classList.add('wrong') // If wrong, the wrong (red) class will be added
  }
}

// Clears the score styling
function clearScore(element) {
  element.classList.remove('right') // Removes right class & styling
  element.classList.remove('wrong') // Removes wrong class & styling
}

/**
 * // Removes Logo from header when displaying stylingfor right or wrong
    function removeLogo() {
        // document.getElementById('header-logo').classList.add('hide') // The logo will be removed by adding the hide class
        // $('document.getElementById("header-logo")') .attr("src","/assets/images/android-chrome-192x192.png");
    }
 */

// Score Pop Up Alert - right or wrong
function scoreAlert(correct) { // It needs the element and to know if it is correct
  if (correct) {
    console.log('Well done, you got it right!') // Logs message to console
    alert('Well done, you got it right!') // Creates a pop up alert in the browser
  } else {
    console.log('Oh no, you got it wrong, better luck next time!') // Logs message to console
    alert('Oh no, you got it wrong, better luck next time!') // Creates a pop up alert in the browser
  }
}

// Q&A - List of the Questions & Options / Correct Answers in the Quiz
const questions = [{
    question: 'Which car company manufacturered the Countach?',
    options: [{
        text: 'Alfa Romeo',
        correct: false
      },
      {
        text: 'Ferrari',
        correct: false
      },
      {
        text: 'Fiat',
        correct: false
      },
      {
        text: 'Lamborghini',
        correct: true
      }
    ]
  },
  {
    question: 'Which car company manufacturered the i8?',
    options: [{
        text: 'Audi',
        correct: false
      },
      {
        text: 'BMW',
        correct: true
      },
      {
        text: 'Jaguar',
        correct: false
      },
      {
        text: 'Lexus',
        correct: false
      }
    ]
  },
  {
    question: 'When was the first speeding ticket issued?',
    options: [{
        text: '1902',
        correct: true
      },
      {
        text: '1926',
        correct: false
      },
      {
        text: '1943',
        correct: false
      },
      {
        text: '1961',
        correct: false
      }
    ]
  },
  {
    question: '3 of the 4 cars are the same car excluding cosmetic changes, which option is not the same car as the others?',
    options: [{
        text: 'Lexus LFA',
        correct: true
      },
      {
        text: 'Scion FRS',
        correct: false
      },
      {
        text: 'Subaru BRZ',
        correct: false
      },
      {
        text: 'Toyota GT86',
        correct: false
      }
    ]
  },
  {
    question: 'On average, how many cars are produced globaly on a daily basis?',
    options: [{
        text: '15,000',
        correct: false
      },
      {
        text: '55,000',
        correct: false
      },
      {
        text: '95,000',
        correct: false
      },
      {
        text: '165,000',
        correct: true
      }
    ]
  },
  {
    question: 'Which Car Corporation owns the most Car Companies?',
    options: [{
        text: 'BMW Group',
        correct: false
      },
      {
        text: 'General Motors',
        correct: false
      },
      {
        text: 'Toyota Motor Corp',
        correct: false
      },
      {
        text: 'Volkswagen AG',
        correct: true
      }
    ]
  }
]

console.log('The page has loaded and the quiz is ready, press start!')

/**
 * 
 */