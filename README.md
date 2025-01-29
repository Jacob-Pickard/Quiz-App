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
        (None at the moment)
    - Features
        [X] Add more questions
    - Technical Debt
        [X] Rename index.js in questions folder to be something more descriptive
        [X] Make the quiz question components into js
        [X] Refactor QuizPage, seperate the questions into their own JSX (or JSON?) file so as to prevent clutter.
        [X] Do QuizPage and Leaderboard need to be in a components folder?
        [X] Seperate everything out into appropriate folders. Just improve the overall filestructuring!

Completed
    - Features
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
        [X] Refactored the questions into seperate files.
        [X] Weird error on line #5 in App.jsx that should probably be dealt with at some point even though it doesnt cause any issues (yet)
        [X] Refactor the full quiz category? Seems like I should not have to have a 4th category in the code. Should be able to pull from the original 3 categories.
    - Bug
        [X] The incorrect/correct indicator does not appear on the last question as the quiz summary and leaderboard popup overtakes it

Question generation prompt: Here is my current JSON of 40 waterfall questions for my quizzing app. They are all relating to the waterfall framework, and are meant to help you study for the PMBOK 7th edition PMP exam. I would like for you to create 10 new questions that fit the JSON format, and make sure that they are not redundant/repeated questions.