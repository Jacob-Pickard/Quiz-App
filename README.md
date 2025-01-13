Log - 1/13/25
    [X] Created a basic skeleton for the website in ChatGPT
    [X] Site is extremely basic and not very visually appealing.
    [X] It does have some of the basic features that I had wanted in that it has hover effects, scoring, a self-leaderboard and it is a quizzing app
    [X] Created the GitHub repository

Backlog
    - Features
        [X] Clarify the quiz categories to be more specific, make sure they actually relate to the PMP
        [X] Create a Scenario based question category
        [X] Create a feature that randomizes the order of the questions
        [X] Create a button that clears the locally stored JSON for the leaderboard
        [X] Add some sort of text that tells you when you get a question correct/incorrect
        [X] Add a way to pre-select your name for the leaderboard
        [X] Make it so that any leaderboard entries with the same name are cleared to prevent confusion when viewing the leaderboard
        [X] CSS & UI/UX updates, website looks atrocious right now
        [X] An animation which pops up to show you how many points you gained from answer a question
    - Technical Debt
        [X] Refactor QuizPage, seperate the questions into their own JSX file so as to prevent clutter.
        [X] Weird error on line #5 in App.jsx that should probably be dealt with at some point even though it doesnt cause any issues (yet)
        [X] Do QuizPage and Leaderboard need to be in a components folder?