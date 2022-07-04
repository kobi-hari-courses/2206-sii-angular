# Exercise 01 - Applications with services

## Description
This exercise builds on top of the original applications built in the typescript exercise
* The wordle application
* The async pop quiz application

The target of this exercise is to practice building angular applications with components and asynchronous services that are based on promises

## Wordle App
In this exercise we will implement the wordle app, in angular, using components and services.
Please take note of the following guidelines

1. Build a set of readonly entities that describe the current state of the game. Make sure the entities are implemented using interfaces and that they are immutable
   1. `Cell` entity holds the state of the one cell
   2. `Guess` entity holds the state of a full guess containing 5 cells
   3. `Board` entity holds the state of a full board
2. Create a statefull service that holds the current state of the game internally.
   1. Implement a method that returns the current state of the game
   2. Implement a method that is called when the user has entered a new guess
      * The method should rely on the previous state
      * The method should calculate a new state from the previous state and the parameters
      * The method should make a "delay" so to immitate a real server
      * The method should return a promise with the result of the new state
3. Implement the view using angular components
   1. A smart app component that talks with the service
   2. A 'non-smart' guess component that receives a `Guess` entity as input
   3. A 'non-smart' cell component that receives a `Cell` entity as input
   4. When the user enters a new guess, the app component should call the service, receive a new state, and update the bindable properties
   5. Make sure to "lock" the ui while the promise is running

## Pop Quiz App
Please follow the same guidelines as the `Wordle App`, and the same architecture. In this exercise I will leave you to design your own entities, components and service methods.


