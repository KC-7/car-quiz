# Kieran's Car Quiz - KCQ

Kieran's Car Quiz is a fun, responsive car quiz that is designed to both engage and interact with the user. The site was designed to demonstrate a variety of different JavaScript functions.


## Live Site Link

https://kc-7.github.io/car-quiz/


## Features

The user is greeted by a streamline quiz home page.

There is a header bar located at the top of the page that displays a logo, header text and score bar. 

The header text is not displayed on smaller devices and the logo is changed to an alternative design. 

There is a collapsible window below the header bar.

When the user expands the collabsible window, they are presented with text relating to the quiz and the CSS validation link. 

If the user is on a device with a larger screen width, a QR code will be displayed to give them the option to try the quiz on a mobile device. 

The collapsible window button text is adjusted when the div is opened / closed to prompt the user to utilize the function. 

The user is able to start the quiz by pressing the "Engine Start" button. 

The question is then displayed alongside the potential answers. The number of options and order of questions varies. 

When the user selects an option, there score is updated and displayed in the right hand side of the header bar. 

The site will scroll down to the next button if required so the user knows theirs is more content on the page, it srolls back up to the top of the page when going to the next question.

The incorrect options are displayed in red and the correct answers in green. 

The background colour of the body is changed to dark green or dark red depending on if the user answered correctly. 

The user is alerted below the question options to wether they have answered correctly or not. 

The text is set to change at random based on a preset array for both the correct and incorrect answers. 

The next question button is displayed and when clicked it brings the user to the next question which is chosen at random. 

When the user completes the array of questions, they will be alerted that they have made it to the end of the quiz after the section displaying their final result. 

The start button is then displayed with the text "Try Again" and when selected will reset the score counters and the question index back to the start. 

The footer is displayed at the end of the web page. It is static on larger devices but is set to stay in line with the web page instead of the broswer window on smaller devices. 

Media queries were used for responsive design so that the site is aesthically pleasing on a variety of different device sizes.

A favicon is utilized to display the site's alt logo in the broswer tab. 


## Features Left to Implement

A submit button could be displayed after the user selects their option, this would give then the option to change their option is they selected the wrong button by mistake before their choice is submitted. When they click submit, the button would then be replaced with the next button. This would give the user an oppurtunity to review their score before proceeding to the next question. 

Additional difficulty levels could be set up asking the user an array of more difficult questions. 

A timer feature could be implemented. 

Sounds could be utilized for user feedback. 

Add additional pages such as contact, 404, etc. 


## Design

The site was designed to demonstrate a variety of different JavaScript, CSS and HTML techniques. 

The JavaScript is set to function in a set order. Certain elements are set to randomize to privide a unique user eqperience. 

The site was designed using the below colour scheme: 

PICTURE

The site's main and alternative logos were created to enchance the sites appearance.

PICTURES 1 & 2

## Testing 

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

HTML - W3C Validator

CSS - Jigsaw Validator

JS - JSHint Validator

Google Insect - Check HTML, CSS & JS. Utilzed console.logs when developing and testing. Lighthouse reports. 

Responsive Design - Google Inspect & AmIResponsive

### Fixed Bugs

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

### Unfixed Bugs

I was not able to identify any further bugs during final testing. 


## Deployment

The site was deployed using GitHub pages.
- In the GitHub repository, navigate to the Settings tab.
- From the source section drop-down menu, select the Master Branch
- Once the master/main branch has been selected, you will then see your link to your site. 
- The live link can be found here - https://kc-7.github.io/car-quiz/ 

## Credits

### Content

- Icons added using <a href="https://fontawesome.com/v5/search?o=r&m=free" target="_blank" rel="noopener" aria-label="Link to Font Awesome | Free V5 Icons (opens in new tab)">Font Awesome | Free V5 Icons</a>.

- QR Code was created for free using https://www.qr-code-generator.com/

### Media 

- The site logo was created using the <a href="https://express.adobe.com/express-apps/logo-maker/" target="_blank" rel="noopener" aria-label="Link to Adobe Express | Free Logo Maker (opens in new tab)">Adobe Express | Logo Maker</a>.









_________________________________________________________________________________________________________________________________________________________________________________











# Readme Basics: 

-:Basics:-
1. Headings
To create a heading in a Readme we need to use #. The size of headings can be changed by adding multiple # Together. The greater the number of # is the smaller the heading is.

Symbol    Tag       Example
`#`       <h1>      # h1 heading
`##`      <h1>      # h2 heading
`###`     <h3>      # h3 heading
`####`    <h4>      # h4 heading
`#####`   <h5>      # h5 heading
`######`  <h6>      # h6 heading
There is also one similar way using <h1> — — <h6> tags of html.

<h1> h1 heading</h1>
<h4> h4 heading</h4>
2. Bold and Italic Text
We need to Use * Symbol.

Actions Syntax                        Example
Bold - **Text**                       Bold Text
Italic - *Text*                       Italic Text
Bold+Italic - ***Text***              Bold+Italic Text
3. Lists
To Create a Unorderedlist we can use * or - for each list point.

Example:

Action               Result
*                     Bullet Point 1 Using *
-                     Bullet Point 2 Using -
To Create an Ordered list we can simply use 1. and so on 2. , 3. , etc.

4. Adding Links To Text
Syntax: [Text](Link)


5. Adding Images
Steps:
1. Put Your Image In The Same Repo.
2. Open Image And Copy The Path
3. Syntax:

![Alt Text](Path_to_image)

OR

![alt text][logo]
[logo]: path_to_image
6. BlockQuotes
BlockQuotes Can be inserted Using > .

> This is a sample BlockQuote

7. Inline Code
To add Inline Code You Need to use the Grave Accent symbol.
Example: This is an example of inline code Github Readme.

8. Syntax highlighting
```python
for i in range(0,100):
  if i>50:
      print(i)
  elif i<50:
      print(i*i)
```

9. Tables
First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column

10. StrikeThrew
~~content~~

11. Line Break
<br>
or
<br/>
12. Horizontal Rule
To add a Horizontal Rule In Readme we can use --- or *** or <hr>.

***

-:Advance:-
1. Custom Width and Height Images
To add Height and Width To our Images We can Use Tags From HTML.

<a href="LINK_TO_REPO">
    <img src="IMAGE_PATH_INSIDE_REPO" alt="Logo" width="80" height="80">
  </a>
2. Adding a GIF
Step 1: Download a GIF From Giphy or Create Your Own GIF

Step 2: Upload GIF to Your Repo

Step 3: Use Custom Width Code and Insert GIF

<a href="LINK_TO_REPO">
  <img src="LINK_TO_GIF.gif" alt="Gif" width="150" height="150">
</a>
3. Adding Link To Images
[<img align="left" alt="Instagram" width="30px" src="IMG_PATH"/>][link]
[link](ACTUAL_LINK)
4. Adding hyperlinks or Tabs
[Basics](#basics)    

# Basics 
...
...
..
The Link Will Redirect and Scroll Till the basics section in the readme.

5. Markdown Badges
Single Badge

<img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/>

Multiple Badges

<p>
<img src="https://img.shields.io/badge/<handle>%20-%23E4405F.svg?&style=for-the-badge&logo=Instagram&logoColor=white"/>
<img src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/>
<img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/>
</p>

Check Out All Markdown Badges
See All Shield Badges
6. Emojis
Check Out The List Of Emojies here

Find The README.md file For The Cheatsheet here :point_right: https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md :point_left:

Thanks For Reading 😃

