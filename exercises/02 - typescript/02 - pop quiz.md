# Exercise 02 - Pop Quiz

## Description
In this exercise we will create a quiz application. The application will present an Exam that contains 10 multiple answer questions. At each point, the app will present the current question, and await for the user to select the answer. Once the user selected the answer, the application will move on to the next question.

Once the exam is over, the application will present a summary of all the questions, each with the provided answer and the correct answer. It will also present the final score.


## Steps
### Step 1 - Game Workspace
- Create a folder in your exercises `git` repository
- Create the starting workspace by cloning the workspace template provided [here](../workspace%20template/)
- Start the application in a browser by
  - running `npm install`
  - running `npm run wpw`
  - running `npm run serve`
  - browsing to the application address

### Step 2 - Create the data interfaces
* `Question`
  - `caption: string`
  - `answers: string[]`
  - `correct: number`
* `Answer`
  - `index: number`
  - `isCorrect: boolean`
* `Exam`
  - `questions: Question[]`

### Step 3 - Create an `ExamRunner` class
* Accepts an Exam object in the constroctor
* Holds a collection of answers provided so far
* Can say what the current question is
* Can say if the exam is over
* Can provide the answers that were given so far
* Can say what the current score is (in percentage)
* The `answerNextQestion(answerIndex: number)` method enters the answer to the current question, if applicable

### Step 4 - Create a `View` class
The `View` class is responsible representing the screen UI elements
* when created, finds and stores references to the various html elements
* allows to set a callback of type `(answer: number) => void` for when the user selects an answer
* a `render(examRunner: ExamRunner)` method refreshes the current state of the various UI elements according to the state of the exam
  * If the exam is in progress, shows the current question, otherwise hides it
    * Presents the caption
    * Presents a button for each possible answer
    * attaches an event handler that listens to the answer buttons
  * If the exam is over, presents the summary area, otherwise hides it
    * Fills the summary area with the proper content

### Step 5 - Connect the classes
* Create an instance of `ExamRunner` and an instance of `View`
* Render the initial view
* When the user selects an answer 
  * enters it to the `ExamRunner`
  * invalidate the view






