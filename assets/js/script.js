const startButton = document.getElementById('start-button'); // This is the Start Button
const quizQuestion = document.getElementById('question-div'); // This is the Question & Options Area
const questionElement = document.getElementById('question'); // This is the Question
const optionButtons = document.getElementById('quiz-options'); // This is the Option Buttons Area
const optionButton = document.getElementsByClassName('option-button'); // These are the individual Option Buttons
const nextButton = document.getElementById('next-question-button'); // This is the Next Question Button
const modalClose = document.getElementsByClassName('modal-close'); // This is the Modal Close Button
const modalContainer = document.getElementsByClassName('modal-container'); // This is the Modal Container

/** The below variables are utilised in the startQuiz and nextButton Functions to randomize the order of the questions */
let shuffleQuestions, currentQuestionIndex;

/** Event Listener - Initiates the Start Quiz Function when the Start Button is clicked */
startButton.addEventListener('click', startQuiz);

/** Event Listener - When the next button is clicked, the options are enabled, the next question is displayed and one is added to the current question index */
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  nextQuestion();
  enableBtns();
  window.scrollTo(0, 0); // Scrolls back up to the top of the page
});

/** Event Listener - Auto Scroll and Focus on Next Button */

optionButtons.addEventListener("click", () => {
  nextButton.focus();
  startButton.focus();
});

/** Collapsible Window - Displays the content when the collapsible area is selected by user */
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      document.getElementById('drop-down').innerText = "Find out more 👇" // Changes the text back to Find Out More
    } else {
      content.style.display = "block";
      document.getElementById('drop-down').innerText = "Read Less 👆" // Changes the text to Read Less to prompt the user to close the window
    }
  });
}

/** The startQuiz Function activates when user clicks start quiz button */
function startQuiz() {
  startButton.classList.add('hide'); // Hides the Start Button
  document.getElementById('start-div').classList.add('hide'); // Hides the Start Button Div
  quizQuestion.classList.remove('hide'); // Shows Quiz Question
  document.getElementById('score-bar').classList.remove('hide'); // Shows the Score Counter
  document.getElementsByClassName('total-questions')[0].innerText = questions.length; // Displays the total number of questions in the quiz
  shuffleQuestions = questions.sort(() => Math.random() - .5); // Randomizes the order of the questions array
  currentQuestionIndex = 0; // Starts with the number of questions asked at 0
  document.getElementsByClassName("correct-answers")[0].innerText = '0'; // Resets counter to 0 when starting / restarting game
  document.getElementsByClassName("questions-asked")[0].innerText = '0'; // Resets counter to 0 when starting / restarting game
  nextQuestion(); // Initiates the nextQuestion Function
  enableBtns(); // Enables the Quiz Option Buttons
}

/** Activates when the startQuiz Function or the nextButton Event Listener has been called */
function nextQuestion() {
  resetOptions(); // Removes unnesecary buttons by calling the resetOptions Function
  displayQuestion(shuffleQuestions[currentQuestionIndex]); // Calls the Display Question Function and Shuffles the remaining questions
  removeModal(); // Remove Modal Div by calling the function
}

/** Removes Modal Div before displaying next question */
function removeModal() {
  for (i = 0; i < modalContainer.length; i++) {
    modalContainer.item(i).classList.add('hide');
  }
  modalContainer[0].classList.add('hide');
}

/** Activates when the nextQuestion function has been called */
function displayQuestion(question) {
  questionElement.innerHTML = question.question; // The question area will be populated by the Question in the Q & A Section
  questionCounter(); // Adds one Question to the Counter using the Question Counter Function
  question.options.forEach(option => {
    const button = document.createElement('button'); // Creates a button for each of the possible answers provided in the Q & A Section
    button.innerText = option.text; // Displays the option's text inside each of the buttons
    button.classList.add('option-button'); // Adds the "Option Button" Class to the buttons
    if (option.correct) {
      button.dataset.correct = option.correct;
    }
    button.addEventListener('click', selectOption); // If the button is clicked, intiate "Select Option"
    optionButtons.appendChild(button);
  });
}

/** Activated when user clicks next */
function resetOptions() {
  clearScore(document.body); // Removes the right or wrong styling 
  document.getElementById('next-question-div').classList.add('hide'); // Removes the Next Question Div
  nextButton.classList.add('hide'); // Hides the next button
  while (optionButtons.firstChild) {
    optionButtons.removeChild(optionButtons.firstChild); // Remove previous question options
  }
}
/** Initiates when the user selects an option */
function selectOption(e) {
  disableBtns(); // Disables the quiz option buttons once selected
  const userSelection = e.target; // The User Selection is the target element (i.e. the button the user clicks on)
  const correct = userSelection.dataset.correct; // Correct is when the User Selection is Right
  scoreSelection(document.body, correct); // Adds the right or wrong styling to the body using the Score Selection Function 
  scoreAlert(correct); // Creates a Pop Up Alert to let the user know if they were correct using the Score Alert Function 
  Array.from(optionButtons.children).forEach(button => {
    scoreSelection(button, button.dataset.correct); // Adds the right or wrong styling to the Options Buttons using the Score Selection Function
  });
  if (shuffleQuestions.length > currentQuestionIndex + 1) { // If there are more questions left to be asked than have currently been asked, it will ask the next one
    nextButton.classList.remove('hide'); // Displays the Next Question button
    document.getElementById('next-question-div').classList.remove('hide'); // Displays the Next Question Div
  } else { // No more questions left
    startButton.innerText = 'Try Again?'; // Changes the text on the Start Button
    startButton.classList.remove('hide'); // Displays the Start Button
    startButton.classList.add('try-again'); // Adds the Try Again Styling Class to the Button   
    document.getElementById('start-div').classList.remove('hide'); // Displays the Start Button Div
    document.getElementById('start-div').classList.add('retry'); // Adjusts the styling for the Start Button Div
    document.getElementById('modal-end').classList.remove('hide'); // Displays the End of Quiz Modal Update
    // Shows the user how many their score when the quiz is finished:
    var correctAnswers = document.getElementsByClassName('correct-answers')[0].innerText;
    var totalQuestions = document.getElementsByClassName('total-questions')[0].innerText;
    document.getElementById('end-result').innerHTML = 'You answered ' + correctAnswers + ' out of ' + totalQuestions + ' questions correctly.';
  }
}

/** Disables the quiz option buttons after the user has answered the question */
function disableBtns() {
  for (i = 0; i < optionButton.length; i++) {
    optionButton.item(i).disabled = true;
  }
  optionButton[0].disabled = true;
}

/** Enables the quiz option buttons so the user can select an option */
function enableBtns() {
  document.getElementsByClassName('option-button').disabled = false;
}

/** Adds score styling class (right or wrong, green or red) to the body and quiz option buttons */
function scoreSelection(element, correct) { // It needs the element and to know if it is correct
  clearScore(element);
  if (correct) {
    element.classList.add('right'); // If correct, the right (green) class will be added
  } else {
    element.classList.add('wrong'); // If wrong, the wrong (red) class will be added
  }
}

/** Clears the score styling */
function clearScore(element) {
  element.classList.remove('right'); // Removes right class & styling
  element.classList.remove('wrong'); // Removes wrong class & styling
}

/** Score Alert - right or wrong */
function scoreAlert(correct) { // It needs the element and to know if it is correct
  if (correct) {
    addScore(); // Add to Score
    document.getElementById('modal-right').classList.remove('hide'); // Displays the modal right div
    var randRight = rightAnswer[~~(Math.random() * wrongAnswer.length)]; // Assigns variable randRight to a random element from the right array
    document.getElementById('modal-body-right-text').innerText = randRight; // Replaces the text in modal text area to randRight
  } else {
    document.getElementById('modal-wrong').classList.remove('hide'); // Displays the modal wrong div
    var randWrong = wrongAnswer[~~(Math.random() * wrongAnswer.length)]; // Assigns variable randWrong to a random element from the wrong array
    document.getElementById('modal-body-wrong-text').innerText = randWrong; // Replaces the text in modal text area to randWrong
  }
}

/** Add one to the user score */
function addScore() {
  let correctAnswers = parseInt(document.getElementsByClassName("correct-answers")[0].innerText);
  document.getElementsByClassName("correct-answers")[0].innerText = ++correctAnswers;
}

/** Update Questions Asked Counter */
function questionCounter() {
  let questionsAsked = parseInt(document.getElementsByClassName("questions-asked")[0].innerText);
  document.getElementsByClassName("questions-asked")[0].innerText = ++questionsAsked;
}

const rightAnswer = [
  'You are doing great, keep it up!',
  'You are on a roll!',
  'Nice work, you know your stuff!',
  'Maybe you should be writing the questions?',
  'Awesome, great work!'
]

const wrongAnswer = [
  'Better luck next time!',
  'I thought you said you like cars?',
  'Are you even trying?',
  'At least you learned something new!',
  'Dont worry, you will do better next time!'
]

/** Q&A - List of the Questions & Options / Correct Answers in the Quiz */
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
    question: 'Three of the below options are the same car. Which is the odd one out?',
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
    question: 'Which of the following cars has the highest top speed?',
    options: [{
        text: 'Bugatti Chiron Super Sport',
        correct: false
      },
      {
        text: 'Hennessey Venom',
        correct: false
      },
      {
        text: 'Koenigsegg Jesko Absolut',
        correct: true
      },
      {
        text: 'Rimac Nevera',
        correct: false
      }
    ]
  },
  {
    question: 'Which option is generally preferred by car enthusiasts?',
    options: [{
        text: 'FWD - Front Wheel Drive',
        correct: false
      },
      {
        text: 'RWD - Rear Wheel Drive',
        correct: true
      }
    ]
  },
  {
    question: 'The car that holds the Guiness World Record for Highest Mileage has:',
    options: [{
        text: '250,000 miles',
        correct: false
      },
      {
        text: '500,000 miles',
        correct: false
      },
      {
        text: '750,000 miles',
        correct: false
      },
      {
        text: '1,500,000 miles',
        correct: false
      },
      {
        text: '3,000,000 miles',
        correct: true
      },
      {
        text: '4,500,000 miles',
        correct: false
      }
    ]
  },
  {
    question: 'Approximately how many individual parts are in an average car?',
    options: [{
        text: '500',
        correct: false
      },
      {
        text: '1,500',
        correct: false
      },
      {
        text: '5,000',
        correct: false
      },
      {
        text: '15,000',
        correct: false
      },
      {
        text: '30,000',
        correct: true
      },
      {
        text: '45,000',
        correct: false
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
  },
  {
    question: 'What country is SEAT manufactured in?',
    options: [{
        text: 'France',
        correct: false
      },
      {
        text: 'Germany',
        correct: false
      },
      {
        text: 'Spain',
        correct: true
      },
      {
        text: 'United Kingdom',
        correct: false
      }
    ]
  }
];