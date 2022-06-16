# Exercise 03 - Async Pop Quiz

## Description
In this exercise we will refactor the product we have built in [Exercise 2](02%20-%20pop%20quiz.md). A new requirement came along, the part the checks if an answer is correct or not should delay for a period of 3 seconds. Of course this should all be done without blocking the UI, and while an answer is being checked, the application should present a "please wait" message and disable the option to click again.

## Step 1 - Change `ExamRunner`
* Add a new property `isBusy: boolean`. It should be true whenever the runner is busy calculating the current answer.
* Change the `answerNextQuestion` method so that it waits 3 seconds and only then changes the state.
  * Use `setTimeout` to implement it.
  * Make sure to change the `isBusy` property to `true` before the timer starts, and back to `false` once you have completed to calculate the new state

## Step 2 - Change the `View` 
* The `render` method should change so that the `isBusy` property takes effect. When it is true, all the controls should be disabled, and a "Please wait" message should appear.
  * Challange for `CSS` pros - add an overlay and spinner on top of the content of the screen.

## Step 3 - Connect it all
* When the user selects an answer now you need to call the `ExamRunner` and render the view, just like before, but now you also need to know when the calculation is over so that you can respond by rendering the view again.
  * How would you know that the `answerNextQuestion` method is really over?
  * Hint - the `setTimeout` method faces the same problem. make the neccessary changes to the `ExamRunner.answerNextQuestion` method so that it also reports completion of calculation
  * Notice how working asynchronously is something that propagates. If one method is asynchronous, all the methods that call it also become asynchronous...



