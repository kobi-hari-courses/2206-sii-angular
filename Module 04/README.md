## Module 04 - RxJS, Http and Pipes
### Projects:
|     |     |
| --- | --- |
| [fun-with-rxjs] | Introduction to rxjs main classes and concepts |
| [colors-app] | RxJS operators in a real life example |


### Introduction to RxJS
* We understood the meaning of a `Stream`
* We defined what an `Observer<T>` is and understood that it has 3 methods
    * `next(T)`
    * `complete()`
    * `error(err)`
* We understood that `Observable<T>` is an object that allows observers to subscribe
    * `subscribe(Observer<T>)`
* We saw how to define an observer explicitly by supplying the 3 methods and their implementation
* We saw how to create an observable using the `interval` operator
* We saw that 2 observers that subscribe on different times, get different sets of events that are not synchronized
* We understoof the difference between **cold** observables and **hot** observables
* We have seen a few other factory operators:
  * `timer` - creates an observable with time delay. It has two variations
    * `timer(----)`=>  ----0|
    * `timer(----, --)` => ----0--1--2--3--4...
  * `of` - wraps a value or values inside a synchronous observable
    * `of(42)` => (42)|
    * `of(1, 2, 3)` => 123|
  * `from` - serves as a multifunction converter between any wrapper to observable
    * `from([1, 2, 3])` => [1, 2, 3]|
    * `from(Promise ----42|)` => ----42|
* We saw how to create a custom observable using the observable constructor
* We got familiar with the `Subject` object and understood that it is a hot observable
* We learned about `BehaviorSubject` and understood that it is just a subject that sends the latest event to a new observer on the moment of subscription

### RxJS in Angular Services
* We learned how to develop stateful services using `BehaviorSubject` and expose it as an observable using the `.asObservable()` method
* We understood that if we subscribe to an observable we must also unsubscribe from it when we are done with it to avoid memory leaks
* We saw that we can bind directly to an observable using the `async pipe` in the html
* We learned the term **Fully Reactive Application** as one where we pass observables all the way from the services to the html templates
* We saw how to configure manual change detection for components and understood that it can dramatically improve performance

### Introduction to `RxJS` operators
* We talked about the concept of operators in math, strings and arrays
* We understood that RxJS operators create observables. 
* We saw 4 documentation web sites that serve as reference guide for reactive operators
    * [ReactiveX docs](http://reactivex.io/)
    * [RxJS docs](https://rxjs-dev.firebaseapp.com/)
    * [Rx Marbles](https://rxmarbles.com/)
    * [Rx Marble Visualizer](https://rxviz.com/)
* We covered some simple operators
    * [map](https://rxjs-dev.firebaseapp.com/api/operators/map)
    * [from](https://rxjs-dev.firebaseapp.com/api/index/function/from)
    * [interval](https://rxjs-dev.firebaseapp.com/api/index/function/interval)
    * [filter](https://rxjs-dev.firebaseapp.com/api/operators/filter)
    * [take](https://rxjs-dev.firebaseapp.com/api/operators/take)
    * [takeLast](https://rxjs-dev.firebaseapp.com/api/operators/takeLast)
    * [mapTo](https://rxjs-dev.firebaseapp.com/api/operators/mapTo)
    * [merge](https://rxjs-dev.firebaseapp.com/api/index/function/merge)
* We created an example that uses observable to convert color search keyword into a list of matching results (colors)
* We Understood that the `map` operator cannot be used when we apply an asyncronous function on each event because it creates an Observable of Promises
* We saw how to use `mergeAll` and `switchAll` to flatten the higher order observables.
* We can also use shortcuts: 
    - `mergeMap(x => observable)` is actually short for `map(x => observable), mergeAll()`
    - `switchMap(x => observable)` is actually short for `map(x => observable), switchAll()`
* We understood the difference between [mergeMap](https://rxjs-dev.firebaseapp.com/api/operators/mergeMap) and [switchMap](https://rxjs-dev.firebaseapp.com/api/operators/switchMap)
