## Module 05 - Routing and Http
### Projects:
|     |     |
| --- | --- |
| [fun-with-routing](fun-with-routing/) | Experimenting with Angular Routing |

### Introduction to routing
* How to use the router by importing the router module
* How to configure the router using `RouterModule.forRoot`
* We created a navigation bar using the `RouterLink` directive instead of `href`
* We saw how to mark the current page in the nav bar by using the `RouterLinkActive` directive and some CSS
* We saw how to programatically navigate using the `Router` service
* We saw how to divide our app into modules, specifically how to create a routing module to encapsulate navigation logic

### Advanced routing
* We saw how to pass parameters to a routed component
* We saw how to use RxJS to create a component that responds to parameters change
* We saw how to create a guard that communicates with the authentication service to prevent entering a page without login in first
* We saw how to make the guard and authentication service, play together to allow redirecting to the desired page after login
* We saw how to use `redirectTo` rules and `pathMatch: 'full'` to automatically redirect the root landing page to one of the specific pages


### Introduction to Http in Angular
* We used `HttpClientModule` to provide our services with the `HttpClient` service
* We saw that the `HttpClient` methods all return Observables
* We saw that it is preferable to use the `toPromise` operator, to convert the observable to promise.
* We understood that toPromise is about to be depricated and replaced with: 
    - firstValueFrom
    - lastValueFrom
