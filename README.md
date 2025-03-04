Log - 3/4/25
    [X] Changed the name of the leaderboard to "My scores" as you cant compete against anyone but yourself without backend implementation
    [X] Add a date and time counter to the leaderboard to show your progression as you finish the quizzes. (Just log when the data is input)
    [X] Added a "Correct questions" tracker that displays when the quiz is complete and on the leaderboard.
    [X] Added rechart library to demonstrate to the user how they are progressing through a visual medium.
    [X] Added a seperate page and button to view these graphs, as well as a corresponding css file.
    [X] Made the title of the website a home button, added CSS to make it more obvious that it can be clicked.

Log - 3/3/25
    [X] Reworked a lot of the file structuring. Determined that blogpage.jsx, leaderboard.jsx, and quizpage.jsx are all components that could be used elsewhere so they remained in /components. Moved all css files into a /styles folder. Also left the questions folder within components. Updated all the import statments to adapt to this filestructuring
    [X] Changed the name, title, and .svg of the website to be better than just "PMBOK Quiz app"

Log - 2/26/25
    [X] Added a topic query paramater to my server.js to allow a user to search by just question topics eg: http://ip_here/questions?topic=agile
    [X] Added all of my questions to my mysql using insertquestions.js and uploading my json file to my server. 

Log - 2/25/25
    [X] Updated the server to use a enviornment variables file
    [X] Used a connection pool to optimize the performance of the server
    [X] Added some basic error handling on the server
    [X] Implemented winston for logging on my server. Shows live in the command line as well as in 2 logging files
    [X] Implemented cacheing for the mysql using NodeCache, these also show up via winston which is quite nice.

Log - 2/19/25
    [?] Progress bar similar to david's quizzing app.
    [2] A prompt before a quiz begins to ask the user if they are ready to begin, instead of throwing them straight into the quiz.
    [?] Add some info on each topic to show how many questions there are before you begin.
    [?] Further CSS updates, added some breakpoints and better mobile compatibility.

Log - 2/12/25
    [X] Standardized my JSONs
    [X] Updated my program to accept the standardized JSON
    [X] Added explanations to my JSON
    [X] Explanations are now displayed when a user selects an answer.
    [X] Updated the quiz logic so that you have to click a next question button instead of the quiz rolling over to the next question after 2 seconds.
    [X] CSS Updates on the leaderboard page
In class
    [X] Tried to get a google maps react component setup, not willing to pay for the service though.
    [X] Realizing that auto animate kind of sucks, maybe need to try a new library.
    [1] changed my question filetypes from .js > .json
    [1] changed questionsHandler.js to .jsx just for consistency

Log - 2/11/25
    [X] Added the Auto Animate blogpost to showcase the library and its features, also happens when you click read more/read less
    [1] Remove the random blogpost that was supposed to be for the JSON demonstration (it has no content)
    [1] Big empty space on the leaderboard page above the title
    [1] Rename index.js in questions folder to be something more descriptive

Log - 2/10/25
    [X] Added the Auto Animate library to my app for later use.    

Log - 2/6/25
    [X] Possibly move the return to home button out of the quiz card as it can be miscontrued as the next question button.
    [1] A page/infobox about how the scoring system works (1 point for each second remaining when the answer is selected) was added to the homepage
    [2] Show your score as you progress through a quiz.

Log - 2/5/25
    [X] User testing happened today!
        [X] Base 5-10 points for getting a question correct, on top of a bonus for time reminaing?
        [X] Maybe clarify the rules for the games and scoring
        [X] Clarify the time remaning to be only for points
        [X] Possibly move the return to home button out of the quiz card as it can be miscontrued as the next question button.
        [X] Host the leaderboard in an API with usernames being a max of 3 characters to prevent abuse?
    [X] User testing went great!

Log - 1/29/25
    [X] Evened all topics out to 50 questions per.
    [X] Tried to remove all duplicate questions
    [X] Added a question counter for when you're in a quiz.

Log - 1/28/25
    [X] Added lots of questions! ChatGPT was not doing everything at once so other categories have more or less than others.
        - agile has 40
        - waterfall has 25
        - scenario has 24
    [X] - Factored out the questions into seperate files.

Log - 1/27/25
    [X] Seperated the questions into their own JS file.
    [X] Added comments explaining the code throughout all files

Log - 1/23/25
    [X] Added 3 more questions to each category, totalling 15 questions now!
    [X] Randomization re-introduced. Seems that AI may have inadvertantly removed it at some point.

Log - 1/22/25
    [X] Added the blog page for the purpose of todays class. Looks pretty nice! Even has a read more/read less function!

Log - 1/21/25
    [X] CSS Updates, looks much nicer!
    [X] Changed capitlization on the buttons so that they are not in All-Caps
    [X] An animation which pops up to show you how many points you gained from answering a question.
    [X] Deployed my website on GH Pages!

Log - 1/15/25
    [X] Fixed the bug with the Incorrect/Correct indicator
    [X] Removed the redundant full category in the JSON.
    [X] Added randomization within each category
    [X] Created a button to clear leaderboard scores.
    [X] Added a way to pre-select your name for the leaderboard. And a nice little button to make the submission clear!

Log - 1/14/25
    [X] Added a fourth quiz category in "Scenario-Based questions" and updated the full test accordingly.
    [X] Some slight CSS updates so that the buttons are in the center of the page in a pleasing way now. Leaderboard also got some css changes.
    [X] Began work on the Incorrect/Correct indicator. Doesnt work on the last question though and must be resolved later.

Log - 1/13/25
    [X] Created a basic skeleton for the website in ChatGPT
    [X] Site is extremely basic and not very visually appealing.
    [X] It does have some of the basic features that I had wanted in that it has hover effects, scoring, a self-leaderboard and it is a quizzing app
    [X] Created the GitHub repository

Backlog
    - Bugs
        None at the moment
    - Features
        [X] Font for the title at the top of the page should be changed maybe, pretty boring and also the title itself is very out of place it feels like.
        [X] Enhancing the styling of the site. I feel that the styles are super underwhelming and bland. This feels like the biggest thing holding my website back.
        [X] Fix the formatting on the active quizpage to always fit all the important quiz elements on the page. The title takes up too much space and leads to the user battling with scrolling.
        [X] Mobile conversion?
        [X] Update the website's colors/Background
        [X] Implement multiple answer questions?
        [X] Host the leaderboard in an API with usernames being a max of 3 characters to prevent abuse?
        [X] Base 5-10 points for getting a question correct, on top of a bonus for time reminaing?
        [3] More categories?
        [3] Sound effects?
        [?] Maybe some sort of dynamic/interesting background behind the quiz and homescreen.
    - Technical Debt
        [X] Realizing that auto animate kind of sucks, maybe need to try a new library.
        [?] Clarify 1-3 or ? for new features on the backlog
        [3] Refactor JSON out of source code onto ec2
        [2] Refactor QuizPage

Completed
    - Features
        [X] Changed the name of the leaderboard to "My scores" as you cant compete against anyone but yourself without backend implementation
        [X] Add a date and time counter to the leaderboard to show your progression as you finish the quizzes. (Just log when the data is input)
        [X] Added a "Correct questions" tracker that displays when the quiz is complete and on the leaderboard.
        [X] Added rechart library to demonstrate to the user how they are progressing through a visual medium.
        [X] Added a seperate page and button to view these graphs, as well as a corresponding css file.
        [X] Made the title of the website a home button, added CSS to make it more obvious that it can be clicked.
        [1] Change the title and icon for the whole site.
        [1] Better name for the website
        [X] Add the rest of my questions to the Backend
        [?] Further CSS updates, added some breakpoints and better mobile compatibility.
        [?] Add some info on each topic to show how many questions there are before you begin.
        [2] A prompt before a quiz begins to ask the user if they are ready to begin, instead of throwing them straight into the quiz.
        [?] Progress bar similar to david's quizzing app.
        [X] Updated my program to accept the standardized JSON
        [X] Added explanations to my JSON
        [X] Explanations are now displayed when a user selects an answer.
        [X] Updated the quiz logic so that you have to click a next question button instead of the quiz rolling over to the next question after 2 seconds.
        [X] Clarify the time remaning to be only for points
        [1] A page/infobox about how the scoring system works (1 point for each second remaining when the answer is selected) was added to the homepage
        [X] Added the Auto Animate library to my app for later use.
        [X] Possibly move the return to home button out of the quiz card as it can be miscontrued as the next question button.
        [1] A page/infobox about how the scoring system works (1 point for each second remaining when the answer is selected) was added to the homepage
        [2] Show your score as you progress through a quiz.
        [X] Question counter (when in a quiz)
        [X] Removed all duplicate questions
        [X] An animation which pops up to show you how many points you gained from answering a question.
        [X] Capitlization on the buttons so that they are not in All-Caps
        [X] CSS & UI/UX updates, website looks atrocious right now
        [X] Add a way to pre-select your name for the leaderboard
        [X] Create a button that clears the locally stored JSON for the leaderboard
        [X] Create a feature that randomizes the order of the questions
        [X] Add some sort of text that tells you when you get a question correct/incorrect
        [X] Clarify the quiz categories to be more specific, make sure they actually relate to the PMP
        [X] Create a Scenario based question category
    - Technical Debt
        [1] Seperate everything out into appropriate folders. Just improve the overall filestructuring!
        [1] changed questionsHandler.js to .jsx just for consistency
        [1] changed my question filetypes from .js > .json
        [1] Standardized my JSONs
        [1] Rename index.js in questions folder to be something more descriptive
        [1] Remove the random blogpost that was supposed to be for the JSON demonstration (it has no content)
        [X] Refactor QuizPage, seperate the questions into their own JSX (or JSON?) file so as to prevent clutter.
        [X] Refactored the questions into seperate files.
        [X] Weird error on line #5 in App.jsx that should probably be dealt with at some point even though it doesnt cause any issues (yet)
        [X] Refactor the full quiz category? Seems like I should not have to have a 4th category in the code. Should be able to pull from the original 3 categories.
    - Bug
        [1] Big empty space on the leaderboard page above the title
        [X] The incorrect/correct indicator does not appear on the last question as the quiz summary and leaderboard popup overtakes it

Question generation prompt: Here is my current JSON of 40 waterfall questions for my quizzing app. They are all relating to the waterfall framework, and are meant to help you study for the PMBOK 7th edition PMP exam. I would like for you to create 10 new questions that fit the JSON format, and make sure that they are not redundant/repeated questions.