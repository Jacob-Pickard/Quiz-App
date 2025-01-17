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
        [X] CSS & UI/UX updates, website looks atrocious right now
        [X] An animation which pops up to show you how many points you gained from answer a question
    - Technical Debt
        [X] Refactor QuizPage, seperate the questions into their own JSX (or JSON?) file so as to prevent clutter.
        [X] Do QuizPage and Leaderboard need to be in a components folder?

Completed
    - Features
        [X] Add a way to pre-select your name for the leaderboard
        [X] Create a button that clears the locally stored JSON for the leaderboard
        [X] Create a feature that randomizes the order of the questions
        [X] Add some sort of text that tells you when you get a question correct/incorrect
        [X] Clarify the quiz categories to be more specific, make sure they actually relate to the PMP
        [X] Create a Scenario based question category
    - Technical Debt
        [X] Weird error on line #5 in App.jsx that should probably be dealt with at some point even though it doesnt cause any issues (yet)
        [X] Refactor the full quiz category? Seems like I should not have to have a 4th category in the code. Should be able to pull from the original 3 categories.
    - Bug
        [X] The incorrect/correct indicator does not appear on the last question as the quiz summary and leaderboard popup overtakes it