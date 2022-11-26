# Kieran's Car Quiz - KCQ 🚘

<a href="https://kc-7.github.io/car-quiz/" target="_blank" rel="noopener" aria-label="Link to Project Website, Kieran's Car Quiz (opens in new tab)">Kieran's Car Quiz</a> is a fun, responsive car quiz that is designed to both engage and interact with the user. The site was designed to demonstrate a variety of different JavaScript functions.

The user is asked a series of questions and their score is calculated in the top right hand corner. The website interacts with the user and changes the colours of the body and the options to show if the answer was correct or not. A randomized message is displayed to the user after each answer alongside their result. The user is shown their total score at the end of the game and given the option to try again. The sites aim is to get a positive response from the user. 

<img style="display: inline; margin: 25px 30%" src="readme-files/images/car-quiz.gif" alt="Animated Site Layout Example" width="40%" height="auto" title="Animated Site Layout Example">

## Live Site Link 🚗 🔰

https://kc-7.github.io/car-quiz/

_________________________________________________________________________________________________________________________________________________________________________________
 
## Technologies 🌐 🛠 

The following technologies were used to develop this site: 

- **HTML** - is used to structure the website. 

- **CSS** - is used to style the website. 

- **JavaScript** - is used to make the website interactive. 

- **Google Fonts** - is used to import additional fonts. 

- **Font Awesome V5 Icons** - is used to import icons. 

- **GitPod** - is the platform used to develop the site. 

- **GitHub** - is used to host the website. 

- **Markdown** - is used to format the readme file. 

_________________________________________________________________________________________________________________________________________________________________________________

## Features 🎲 🎮

### Header Bar 👦

- There is a header bar located at the top of the page that displays a logo, header text and score bar. 

- The score is only displayed once the quiz has sorted. It displays the total number of correct answers, total number of questions asked and total number of questions in the quiz.

<img style="display: inline; margin: 25px 0" src="readme-files/images/header.png" alt="Header" width="100%" height="auto" title="Header">

- The header text is not displayed on smaller devices and the logo is changed to an alternative design that is better suited to smaller devices. 

<img style="display: inline; margin: 25px 25%" src="readme-files/images/responsive-1.png" alt="Responsive View - Start Quiz" width="50%" height="auto" title="Responsive View - Start Quiz">

### Collapsible Window 🔽 🔼

- There is a collapsible window below the header bar.

- When the user expands the collapsible window, they are presented with text relating to the quiz and the CSS validation link. 

- If the user is on a device with a larger screen width, a QR code will be displayed to give them the option to try the quiz on a mobile device. 

- The collapsible window button text is adjusted when the div is opened & closed to prompt the user to interact with it.  

<img style="display: inline; margin: 25px 25%" src="readme-files/images/responsive-2.png" alt="Responsive View - Collapsible Area" width="50%" height="auto" title="Responsive View - Collapsible Area">

### Welcome Screen 👋 ⏯

- The user is greeted by a streamline quiz home page below the collapsible window. 

- The user is able to start the quiz by pressing the "Engine Start" button. 

<img style="display: inline; margin: 25px 30%" src="readme-files/images/start.png" alt="Start Button" width="40%" height="auto" title="Start Button">

### Question Screen ❓ 🖱

- The question is then displayed alongside the potential answers. The number of options and order of questions varies. The Start Game button is hidden. 

<img style="display: inline; margin: 25px 25%" src="readme-files/images/responsive-3.png" alt="Responsive View - Question" width="50%" height="auto" title="Responsive View - Question">

### Result Screen 🎰 ✅ ❌

- When the user selects an option, there score is updated and displayed in the right hand side of the header bar. 

- The site will scroll down to the next button if required so the user knows that there is more content on the page, it scrolls back up to the top of the page when the next question button is selected. 

<img style="display: inline; margin: 25px 25%" src="readme-files/images/responsive-4.png" alt="Responsive View - Correct" width="50%" height="auto" title="Responsive View - Correct">

- The incorrect options ❌ are displayed in red and the correct answer ✅ is in green. 

<img style="display: inline; margin: 25px 30%" src="readme-files/images/question-example.png" alt="Answers" width="40%" height="auto" title="Answers">

- The background colour of the body is changed to dark green or dark red depending on if the user answered correctly. 

<img style="display: inline; margin: 25px 25%" src="readme-files/images/2questions.png" alt="Background Colour Change" width="50%" height="auto" title="Background Colour Change">

- The user is alerted below the question options to whether they have answered correctly or not. 

<img style="display: inline; margin: 25px 25%" src="readme-files/images/responsive-5.png" alt="Responsive View - Incorrect" width="50%" height="auto" title="Responsive View - Incorrect">

- The text is set to change at random based on a pre-set array for both the correct and incorrect answers. 

- The next question button is displayed and when clicked it brings the user to the next question which is chosen at random. 

<img style="display: inline; margin: 25px 30%" src="readme-files/images/right.png" alt="Correct Answer" width="40%" height="auto" title="Correct Answer">

<img style="display: inline; margin: 25px 30%" src="readme-files/images/wrong.png" alt="Incorrect Answer" width="40%" height="auto" title="Incorrect Answer">

### End Screen ⏹ 🔄

- When the user completes the array of questions, they will be alerted that they have made it to the end of the quiz after the section displaying their final result. 

<img style="display: inline; margin: 25px 25%" src="readme-files/images/responsive-6.png" alt="Responsive View - End" width="50%" height="auto" title="Responsive View - End">

- The start button is then displayed with the text "Try Again" and when selected it will reset the score counters and the question index back to the start. 

<img style="display: inline; margin: 25px 25%" src="readme-files/images/end.png" alt="End of Quiz" width="50%" height="auto" title="End of Quiz">

### Footer 👟 

- The footer is displayed at the end of the web page. It is static on larger devices but is set to stay in line with the web page instead of the browser window on smaller devices. 

<img style="display: inline; margin: 25px 0" src="readme-files/images/footer.png" alt="Footer" width="100%" height="auto" title="Footer">

### Responsive Design 📱 💻 

- Media queries were used for responsive design so that the site is aesthetically pleasing on a variety of different device sizes.

### Favicon

- A favicon is utilized to display the site's alt logo in the browser tab. 

<img style="display: inline; margin: 25px 40%" src="readme-files/images/tab.png" alt="Favicon in Broswer Tab" width="20%" height="auto" title="Favicon in Browser Tab">

## Features Left to Implement 🆕

- A **submit button** could be displayed after the user selects their chosen option, this would give then the option to change their mind if they selected the wrong button by mistake before their choice is submitted. When they click submit, the button would then be replaced with the next button. This would give the user an opportunity to review their score before proceeding to the next question. 💪

- **Additional difficulty levels** could be set up asking the user an array of more difficult questions. 💬

- A **timer** feature could be implemented. ⏱ ⏳

- **Sounds** could be utilized for user feedback. 🔊

- Add **additional pages** such as contact, 404, etc. 📝

- Consider **restyling the website** so all content is displayed within all screen sizes and remove auto scroll / focus features. This could be achieved by getting the result to pop up in front of the current options instead of below them and by utilizing media queries.  📱 💻

- Add option for users to enter a **username** and save all scores. 🔤

_________________________________________________________________________________________________________________________________________________________________________________

## Design ✍ 🆒

- The site was designed to demonstrate a variety of different JavaScript, CSS and HTML techniques. 

- Basic sketches and flow charts were created prior to coding. 

- The JavaScript is set to function in a set order. Certain elements are set to randomize to provide a unique user experience. 

- The site was styled using the below colour scheme that I created on <a href="https://coolors.co/" target="_blank" rel="noopener" aria-label="Link to Coolors Website (opens in new tab)">Coolers</a>. 

<img style="display: inline; margin: 25px 35%" src="readme-files/images/car-quiz-colours.png" alt="Colour Scheme" width="30%" height="auto" title="Colour Scheme">

<img style="display: inline; margin: 25px 35%" src="readme-files/images/colours-gradient.png" alt="Colour Scheme Gradient" width="30%" height="auto" title="Colour Scheme Gradient">

- The site's main and alternative logos were created to enhance the sites appearance and create a professional UI. 

<img style="display: inline; margin: 25px 40%" src="assets/images/logo-b.png" alt="Main Logo" width="20%" height="auto" title="Main Logo">

<img style="display: inline; margin: 25px 40%" src="assets/images/logo-d.png" alt="Alt Logo" width="20%" height="auto" title="Alt Logo">

_________________________________________________________________________________________________________________________________________________________________________________

## Testing 🔧 

### Test Cases 🕵

- [X] Page loads correctly 🌐 and displays Engine Start button ⏯ and Quiz Container.
- [x] Find out more collapsible window ⏬ works as intended: 
  - [x] Changes colour when hovering. 
  - [x] Changes text when displaying content. 
  - [x] QR Code is displayed within the collapsible window when over the specified screen width and is removed on devices with a smaller screen width.
- [x] All links work and open in new tab: GitHub link in logo and social media links in footer. 🌐 
- [x] When Engine Start ⏯ is clicked, the user is: shown the question and options, the score counter is displayed in the right hand side of the header bar and one question is added to the number of questions asked. 
- [x] When a correct option ✅ is selected, the following will happen:
  - [x] The quiz options will be disabled.
  - [x] The options change green or red to show the correct answer. 
  - [x] The body will turn dark green. 
  - [x] The fixed and randomized correct answer messages are displayed below the quiz results.
  - [x] The next button appears below the results, the browser will scroll down if this button appears out of view.
  - [x] The score is updated by 1 as the answer was correct. 
- [x] When an incorrect option ❌ is selected, the following will happen:
  - [x] The quiz options will be disabled.
  - [x] The options change green or red to show the correct answer. 
  - [x] The body will turn dark red. 
  - [x] The fixed and randomized incorrect answer messages are displayed below the quiz results.
  - [x] The next button appears below the results, the browser will scroll down if this button appears out of view.
  - [x] The score is not updated by as the answer was incorrect. 
- [x] When the Next Question button ⏭ is selected, the following will happen: 
  - [x] The next question will be displayed in random order. 
  - [x] The quiz will scroll back up to the top so the user can see the question if it was out of view when selecting next. 
  - [x] The total number of questions asked will be increased by 1. 
  - [x] The quiz options will be enabled. 
  - [x] The quiz options and the body styling will be returned to normal.
  - [x] The results from the previous question and the Next Question button will be hidden. 
- [x] When an option is selected, it will repeat the above sequences until all questions have been asked. 🔀
- [x] A message will be displayed when all questions have been completed by the user 🏁, it will include the users score and a button to start again. 
- [x] The start button is restyled to display "Try again" 🔂 and when selected it will do the following: 
  - [x] The quiz will go back to the start and ask a question at random. 
  - [x] The score and total number of questions asked will be reset back to 0. 
  - [x] The styling, next button, try again button and the messages will be removed. 
- [x] When the browser window is resized, the styling should adjust according to the CSS rules. 📱 💻
  - [x] The quiz section will reduce in width. 
  - [x] The buttons will be reduced in size and displayed in a single column.  
  - [x] The header text will be removed.  
  - [x] The header logo will change to the alt design. 
  - [x] The text size throughout the website will be reduced accordingly. 

#### HTML - W3C Validator 🏸

The website passed the <a href="https://validator.w3.org/nu/?doc=https%3A%2F%2Fkc-7.github.io%2Fcar-quiz%2F" target="_blank" rel="noopener" aria-label="Link to the W3C HTML Validator (opens in new tab)">W3C HTML validator</a> check with no issues. 

<img style="display: inline; margin: 25px 30%" src="readme-files/testing/html.png" alt="HTML Validation" width="40%" height="auto" title="HTML Validation">

#### CSS - Jigsaw Validator 🏸

The webesite passed the <a href="http://jigsaw.w3.org/css-validator/validator?lang=en&profile=css3svg&uri=https%3A%2F%2Fkc-7.github.io%2Fcar-quiz%2F&usermedium=all&vextwarning=&warning=1" target="_blank" rel="noopener" aria-label="Link to the Jigsaw CSS Validator (opens in new tab)">Jigsaw CSS Validator</a> check with no issues. 

<a href="http://jigsaw.w3.org/css-validator/validator?lang=en&profile=css3svg&uri=https%3A%2F%2Fkc-7.github.io%2Fcar-quiz%2F&usermedium=all&vextwarning=&warning=1" target="_blank" rel="noopener" aria-label="Link to Jigsaw CSS Validator (opens in new tab)">
<img style="display: inline; margin: 25px 45%" src="assets/images/valid-css.gif" alt="CSS Validation Logo" width="10%" height="auto"></a>

<img style="display: inline; margin: 25px 30%" src="readme-files/testing/css.png" alt="CSS Validation" width="40%" height="auto" title="CSS Validation">

#### JS - JSHint Validator 🏸

<a href="https://jshint.com/" target="_blank" rel="noopener" aria-label="Link to JSHint (opens in new tab)">JSHint</a> was used to review the JavaScript code. 

<img style="display: inline; margin: 25px 35%" src="readme-files/testing/js.png" alt="JavaScript JSHint" width="30%" height="auto" title="JavaScript JSHint">

<img style="display: inline; margin: 25px 40%" src="readme-files/testing/jshint.png" alt="JavaScript JSHint Warnings" width="20%" height="auto" title="JavaScript JSHint Warnings">

#### Google Inpsect 🏸 - Check HTML, CSS, JS, Log & Lighthouse reports. 🖱 💡

- I used console.log()'s during development and testing to ensure all functions were being called correctly. These were removed once testing was completed. Snip from testing below.   

<img style="display: inline; margin: 25px 25%" src="readme-files/testing/log-ex.png" alt="Console Log Example" width="50%" height="auto" title="Console Log Example">

- I analyzed the page load on both mobile and desktop devices using the Google Inspect Lighthouse Report Feature and received full 100% marks for all criteria; Performance, Accessibility, Best Practices and SEO. 

<img style="display: inline; margin: 25px 10%" src="readme-files/testing/lighthouse.png" alt="Google Lighthouse Report Results" width="80%" height="auto" title="Google Lighthouse Report Results">

- I used the element inspect feature to assist with styling. 

#### Responsive Design & Visual Testing - Google Inspect & AmIResponsive 📱 💻 🖥

- Visual testing was mainly carried out using the Google Chrome Inspect tool. I tested all sections of the site on a combination of different screen sizes. 

- I carried out visual testing on the following device sizes using Google Inspect: 
    - iPhone SE: 375 x 667 px
    - iPhone XR: 414 x 896 px
    - iPhone 12 Pro 390 x 844 px
    - Pixel 5: 393 x 851 px
    - Samsung Galaxy S8+: 360 x 740 px
    - Samsung Galaxy S20 Ultra: 412 x 915 px
    - iPad Air: 820 x 1180 px
    - iPad Mini: 768 x 1024 px
    - Surface Pro 7: 912 x 1368 px
    - Galaxy Fold: 280 x 653 px - *Note, this is the smallest device size the site has been designed to operate on*
    - Nest Hub: 1024 x 600 px
    - Nest Hub Max: 1280 x 800 px

- Visual testing was also carried out using <a href="https://ui.dev/amiresponsive" target="_blank" rel="noopener" aria-label="Link to Am I Responsive Website (opens in new tab)">Am I Responsive</a>. The responsive image examples shown above were taken from this website. 📱 💻 This site provides simulations in the following sizes: 
    - Desktop: 1600 x 992 px - scaled down to scale (0.3181)
    - Laptop: 1280 x 802 px - scaled down to scale (0.277)
    - Tablet: 768 x 1024 px - scaled down to scale (0.219)
    - Mobile: 320 x 480 px - scaled down to scale (0.219)

<img style="display: inline; margin: 25px 30%" src="readme-files/images/car-quiz.gif" alt="Animated Site Layout Example" width="40%" height="auto" title="Animated Site Layout Example">

- I physically tested the site on the following devices: 
    - Dell Monitor - 24": 1920 x 1200 px 🖥
    - Lenovo Yoga 910 - 14" (4k): 3840 x 2160 px 💻 
    - Samsung Galaxy S10 - 5.8": 360 x 760 px 📱

#### Fixed Bugs &#10004; 🕵 🕷

- [x] JSHint flagged issues such as missing semicolons which were then removed. 

<img style="display: inline; margin: 25px 40%" src="readme-files/testing/jshint-1.png" alt="JavaScript Validation Issues" width="20%" height="auto" title="JavaScript Validation Issues">

- [x] Minor HTML Issues were highlighted during the initial test and addressed as required. 

<img style="display: inline; margin: 25px 35%" src="readme-files/testing/initial-issues.png" alt="HTML Validation Issues" width="30%" height="auto" title="HTML Validation Issues">

- [x] I had an issue where the next button was being displayed below the start again button, I resolved this by correcting the JS function. 

<img style="display: inline; margin: 25px 35%" src="readme-files/testing/next-btn-issue.png" alt="Next Button Issue" width="30%" height="auto" title="Next Button Issue">

- [x] I initially used alerts to display the answer and end of quiz results. I changed these alerts to show inside the quiz in case the user has a pop up blocker installed on their browser, in which case, the alerts would not work and be seen as a bug. 

<img style="display: inline; margin: 25px 35%" src="readme-files/testing/alert1.png" alt="Window Alert Correct Answer" width="30%" height="auto" title="Window Alert Correct Answer">
<img style="display: inline; margin: 25px 35%" src="readme-files/testing/alert2.png" alt="Window Alert Wrong Answer" width="30%" height="auto" title="Window Alert Wrong Answer">
<img style="display: inline; margin: 25px 35%" src="readme-files/testing/alert3.png" alt="Window Alert End of Quiz" width="30%" height="auto" title="Window Alert End of Quiz">

- [x] I shared the quiz for testing and was informed that it was not obvious that the next button was displayed lower than what was being displayed on the browser after selecting an option. I addressed this by implementing a Focus Function to send the user to the next button and a Scroll To Function to get the user back to the top of the page. 

- [x] I also received feedback that when the user clicked on the collapsible window, it was not obvious how to close it. To address this issue, I set the inner text to change when the collapsible area is opened or closed to prompt the user to interact with it. 

- [x] I was not able to disable the quiz option buttons initially, this is because I needed to target the elements inside of the array instead of the class group directly. 

#### Unfixed Bugs &#10006; 🕵 🕷

I was not able to identify any further bugs during final testing. &#10004; 🐛 🐞 🦗

_________________________________________________________________________________________________________________________________________________________________________________

## Deployment 🌐

### GitPod 🔧 ⌨

- I developed the site using HTML and CSS in GitPod. 

- I ran a local sever each time I was viewing & editing it by typing the below into the terminal: 
    - *python3 -m http.server*

- For version control, I regularly updated my work to GitHub by entering the below commands into the terminal: 
    - *git add .*
    - *git commit -m "Update message here"*
    - *git push*

### GitHub 🌐 🖱

The site was deployed using <a href="https://github.com/KC-7/car-quiz" target="_blank" rel="noopener" aria-label="Link to the GitHub Repo (opens in new tab)">GitHub</a> pages:
- In the GitHub repository, navigate to the Settings tab.
- From the source section drop-down menu, select the Master Branch.
- Once the master/main branch has been selected, you will then see your link to your site. 
- The live link can be found here: https://kc-7.github.io/car-quiz/ 

_________________________________________________________________________________________________________________________________________________________________________________

## Credits 🥂 🙏

- This site was developed using information learned from the <a href="https://codeinstitute.net/" target="_blank" rel="noopener" aria-label="Link to the Code Institute (opens in new tab)">Code Institute</a> alongside other online resources such as <a href="https://www.w3schools.com/" target="_blank" rel="noopener" aria-label="Link to W3Schools (opens in new tab)">W3Schools</a> & <a href="https://stackoverflow.com/" target="_blank" rel="noopener" aria-label="Link to Stack Overflow (opens in new tab)">Stack Overflow</a>. 

- The Code Institute's Gitpod Full Template was used as the initial template for the project. The repository is available on their <a href="https://github.com/Code-Institute-Org/gitpod-full-template" target="_blank" rel="noopener" aria-label="Link to The Code Institute Gitpod Full Template (opens in new tab)">GitHub Account</a>.

- The walk through project I completed with the Code Insitute, <a href="https://github.com/KC-7/love-maths" target="_blank" rel="noopener" aria-label="Link to The Code Institute Walkthrough Project, Love Maths (opens in new tab)">Love Maths</a>, was a good source to reference for information such as updating scores. 

- I watched JavaScript tutorials on YouTube and found <a href="https://www.youtube.com/@WebDevSimplified" target="_blank" rel="noopener" aria-label="Link to Wed Dev Simplified's YouTube Channel (opens in new tab)">Web Dev Simplified</a>'s channel very helpful when learning new skills, particularly his video on building a quiz.

- I learned how to implement the <a href="https://www.w3schools.com/html/html_favicon.asp" target="_blank" rel="noopener" aria-label="Link to W3Schools' Favicon Guide (opens in new tab)">Favicon</a>, the picture in the browser tab, from using W3Schools' guide on implementing this feature.

- I learned how to implement the <a href="https://www.w3schools.com/howto/howto_js_collapsible.asp" target="_blank" rel="noopener" aria-label="Link to W3Schools' Collapsible Area Guide (opens in new tab)">collapsible area</a> from using W3Schools' guide on implementing this feature.

- I learned how to implement the smooth scroll function, the effect that scrolls down to the area being navigated to instead of jumping to it, from using <a href="https://www.w3schools.com/howto/howto_css_smooth_scroll.asp" target="_blank" rel="noopener" aria-label="Link to W3Schools' Smooth Scroll Guide (opens in new tab)">W3Schools</a> guide on implementing this feature.

- I learned how to implement the <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus" target="_blank" rel="noopener" aria-label="Link to Developer.Mozilla.Org's JS Focus Guide (opens in new tab)">Focus</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo" target="_blank" rel="noopener" aria-label="Link to Developer.Mozilla.Org's JS Window Scroll Guide (opens in new tab)">Scroll</a> featues in JavaScript using Developer.Mozilla.Org .

- Fonts added using <a href="https://fonts.google.com/" target="_blank" rel="noopener" aria-label="Link to Google Fonts (opens in new tab)">Google Fonts</a>.

- Icons added using <a href="https://fonts.google.com/" target="_blank" rel="noopener" aria-label="Link to Font Awesome | Free V5 Icons (opens in new tab)">Font Awesome | Free V5 Icons</a>.

- The resposive images in the readme were taken using <a href="https://ui.dev/amiresponsive" target="_blank" rel="noopener" aria-label="Link to Am I Responsive Website (opens in new tab)">Am I Responsive</a>.

- The animated gif in the readme was created using <a href="https://imgflip.com/gif-maker" target="_blank" rel="noopener" aria-label="Link to Imgflip's free gif maker (opens in new tab)">Imgflip's free gif maker</a>

- The QR Code was created for free using <a href="https://www.qr-code-generator.com/" target="_blank" rel="noopener" aria-label="Link to QR Code Generator Website (opens in new tab)">QR Code Generator .com</a>.

- The colour platte was generated using <a href="https://coolors.co/" target="_blank" rel="noopener" aria-label="Link to Coolors Website (opens in new tab)">Coolers</a>.

- The site logo was created using the <a href="https://express.adobe.com/express-apps/logo-maker/" target="_blank" rel="noopener" aria-label="Link to Adobe Express | Free Logo Maker (opens in new tab)">Adobe Express | Free Logo Maker</a>.

- The social links in the footer and the CSS validator logo all contain links to third party websites. 

_________________________________________________________________________________________________________________________________________________________________________________

Thanks for reading! 😃 