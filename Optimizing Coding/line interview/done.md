1. Event loop là gì, call stack, callback queue?

- done
- Nhiều hơn một queue, ưu tiên promise
- event loop: thực chất là một vòng lặp while true, để lấy task từ các queue ra thực hiện

```
function a() {
console.log("a);
}

function b() {
setTimeout(cb)
}

a();
b();

int main() {

a();
b();
int queue = [cb];

while(true) {
if (queue khong rong) {
func = queue.pop();
func();
}
}

return true;
}
```

2. V8

- V8 is C++ program, which receives JavaScript code, compiles, and executes it.
- V8 does:
  1 ) Compiles and executes JS code
  2 ) Handle call stack - running JS functions in some order
  3 ) Managing memory allocation for objects - the memory heap.
  4 ) Garbage collection - of objects which are no longer in use
  5 ) Provide all the data types, operators, objects and functions

- V8 can: provide the event loop, but this is sometimes implemented by the browser as well.
- V8 doesn't know anything about Document Object Model (DOM) - which is provided by the browser, and obviously irrelevant to Node.js for example.
- V8 is a single threaded execution engine.
- On the runtime, V8 is mainly managing the heap memory allocation and the single threaded call stack.
- The call stack is mainly a list of function to execute, by calling order
- Every function which calls another function will be inserted one after the other directly, and callbacks will be sent to the end.

4. Javascript - what are you?

- A single-threaded non-blocking asynchronous concurrent.
- Javascript have call stack, event loop, callback queue, some other apis and stuff.

- Do v8 have a call stack, event loop, callback queue, and some other apis and stuff?
  -> V8 have a call stack and a heap, V8 does have those other things?

5. How does callbacks work, higher order function

- higher order functions are functions that take other functions as arguments or return functions as their results.
- Taking an other fnction as an argument is often rederred as a callback function, because it is called back by the higher-order function.
- Functional Programming: Functional Programming is a form of programming in which you can pass functions as parameters to other functions and also return them as values. In functional programming, we think and code in terms of functions.
- In javascript, function is first-class citizens. You can pass them as parameters to other functions (callbacks), assign them to variables and pass them around.

- done

6. Higher order component

- What is a higher-order component?
  A higher-order component (HOC) is an advanced element for reusing logic in React components.
  A components take one or more component as an arguments and return a new upgraded component.

* We don't modify or mutate components. We create new ones
* A HOC is used to compose components for code reuse.
* A HOC is pure function. It has no side effects, return only a new component.

We have some examples of real-world HOCs:

- react-redux:
  connect(mapStateToProps, mapDispatchToProps)(UserPage);
- react-router:
  withRouter(UserPage);
- material-ui:
  withStyles(styles)(UserPage);

Structure Of A Higher-Order Component
A HOC is structured like a higher-order function:

- It is a component
- It takes another component as an argument
- The, it return a new component
- The component it returns can render the original component that was passed to it.

The snippet below shows how a HOC is structured in React:

```
import React from 'react';

const higherOrderComponent = (WrappedComponent) => {
class HOC extends React.Component {
render() {
return <WrappedComponent />;
}
}

return HOC;
};
```

Use Cases:

- Show a loader while a component waits for data

* Basicly, we do something like this:
  // List.js
  ```
  import React from 'react';
  const List = (props) => {
    const { repos } = props;
    if (!repos) return null;
    if (!repos.length) return <p>No repos, sorry</p>;
    return (
      <ul>
        {
          repos.map((repo) => {
            return <li key={repo.id}>{repo.full_name}</li>;
          })
        }
      </ul>
    );
  };
  export default List;
  ```
* HOC that handles loading.
  // withLoading.js

  ```
  import React from 'react';
  function WithLoading(Component) {
    return function WithLoadingComponent({isLoading, ...props}) {
      if (!isLoading) return <Component {...props}/>;
      return <p>Fetching data</p>;
    }
  }
  export default WithLoading;
  ```

  //
  index.js

  ```
  import React from 'react';
  import List from './components/List.js';
  import WithLoading from './components/withLoading.js';
  const ListWithLoading = WithLoading(List);

  class App extends React.Component {
    state = {};

    componentDidMount() {
      this.setState({loading: true});
      fetch(`httpps://`)
        .then((json) => json.json())
        .then((repos) => {
          this.setState({loading: false, repos});
        });
    }

    render() {
      return (
        <ListWithLoading
          isLoading={this.state.loading}
          repos={this.state.repos}
        />
      )
    }
  }

  export default App;
  ```

- Cái higher order component này, một là để truyển thêm dữ liệu vào dô props như redux, hai là để if else điều kiện để sinh ra những cái khác nhau mà thôi.

CONDITIONALLY RENDER COMPONENTS
// withAuth.js

```
import React from 'react';
export function withAuth(Component) {
  return class AuthenticatedComponent extends React.Component {
    isAuthenticated() {
      return this.props.isAuthenticated;
    }
    render() {
      const loginErrorMessage = (
        <div>
          Please login
        </div>
      );

      return (
        <div>
          {this.isAuthenticated === true ? <Component {...this.props}/> : loginErrorMessage}
        </div>
      );
    }
  }
}

export default withAuth;
```

// MyProtectedComponent.js

```
import React from "react";
import {withAuth} from "./withAuth.js";

export class MyProtectedComponent extends React.Component {
  render() {
    return (
      <div>
        This is only viewable by authenticated users.
      </div>
    )
  }
}

export default withAuth(MyProtectedComponent);
```

PROVIDE COMPONENTS WITH SPECIFIC STYLING
Một là if else để tùy biến mà ra
Hai là truyền vào props, props thì có nhiều kiểu props, props biến và props styling.
// A simple component

```
const HelloComponent = ({name, ...otherProps}) => (
  <div {...otherProps}>Hello {name}</div>
)
```

```
const withStyling = (BaseComponent) => (props) => (
  <BaseComponent {...props} style={{fontWeight: 700, color: 'red'}}/>
)
```

```
const EnhanceHello = withStyling(HelloCompnent);
<EnhancedHello name='World' />
```

PROVIDE A COMPONENT WITH ANY PROP YOU WANT
We can study our code base and note what reusable prop is needed across components. Then, we can have a wrapper HOC to provide those components with the reuseable prop.

7. difference between es6 and es5

- ES: EcmaScript: một cái thêm cho Javascript được chuẩn hóa
- Difference between ES6 and ES5 (ES6 in 2015)

* The const keyword
* The var vs let keyword
* The let keyword
* The arrow functions
* Object oriented programming concept
* Using class declaration for object creation and inheritance in ES6 version of JAVASCRIPT
* Improved Array capabilities
* The Array.of() method
* Converting non-array objects into actual arrays
* The Array.from() method
* New methods for array
* The Array.find() and Array.findIndex() function
* Sets and Maps
* EXMAScript 6 introduces sets and maps in Javascript
* Function with default parameters in Javscript

11. promise

- done

8. React hook, react life cycle, useCurrent

function solution(num) {
return getData(num).then(data1 => {
getMax(data1).then(data2 => {
return 80;
});
return 80
});
}

// DO NOT TOUCH BELOW CODE
function getData(num) {
return Promise.resolve({
first: 80 _ num,
second: 30 _ num
});
}

// DO NOT TOUCH BELOW CODE
function getMax(numbers) {
console.log(numbers);
return Promise.resolve(Math.max(...numbers));
}

1. ổng có hỏi so sánh C++ với javascript
   https://careerkarma.com/blog/javascript-vs-cplusplus/

- Javascript is a scripting whereas C++ is a programming language.
- C++ program is to be compiled and executed, whereas a script in Javascript is interpreted.
- Javascript is dynamically typed whereas C++ is statically typed.
- C++ support procedural and generic programming. Javascript support reflective programming.
- Reflective programming or reflection is the ability of a process to examine intrspect, and modify its own structure and behavior.

- Javascript

* is made for the web
* interpreted:
* scripting language: means JavaScript doén't have a compilation step; it's turned into virtual machine code on the spot at runtime.
* high-level.
* Its code typically only runs in browsers.
* Javascript há curly-bracket syntax, dynamic typing, first class function.

- C++

* is extremely fast
* compiled
* mid-level
* and statically typed
* It serves as the backbone for many programs, operating systems, and other languages.
* C++ is not specific for anything, it was built for everything.
* Used for general-purpose languages.
* It;s an object-oriented, compiled, middle level programming language built with performance and efficiency.
* Why Javascript and other language have specific use case where they shine best, C++ often form the backbone for many programs and languages that let other languages shine.

- C++ vs JavaScript: Speed and Reliability

* JavaScript is a higher-level, C++ consider is mid-level.
* Means Javascript closer with humans languages, and C++ closer with zero and one.
* Javascript can do more in one line, and shorter and C++.
* C++ has something Javascript doesn't: setup.
* C++ is statically typed. => you declare every type of variable while coding. Javascript, on the other hand, is dynamically typed, which means the variables can change type at runtime.
* C++ is compiled language (or ironically, a compiler language). This mean, you typed your code, you'll have to compile it before it can run.
  Javascript is not weighed down by any compiler, it runs when you press play. This isn't necessarily a fair comparison, as JavaScript code is usually much shorter than sometimes massive C++.

- JavaScript vs C++: Syntax

* JavaScript is a multi-paradigm language. It's designed to support event-driven, functional, and imperative programming styles. It also has all if the APIs it needs for working with text, arrays, dates.
  C++ is object-oriented. It looks like old guard programming - curly braces and all - and has less forgiveness for missing a semicolon. It has objects, classes, methods, and instance variables.

- C++ vas JavaScript: Performance

* For performance, you don't need a competition. C++ is ten or more times faster than JavaScript on the board. There is no argument which is faster.
  Simple reason, because V8 is written by C++, so C++ is must faster than JavaScript.
* The thing you has to wait for before your C++ code was ready is the thing JavaScript does in the moment at runtime.
* And Javascript is high-level language, JavaScript is easier to type, but more work for the interpreter an runtime.
* Something important to note about performance is that for JavaScript, it's OK to be little slower. JavaScript isn't designed for heavy calculations in a restricted environment like C++ is. You won't be programming any moon landers in JavaScript.

- C++ vs JavaScript Application

* JavaScript is for web and C++ is generally for everything else. They do overlap somewhere. One of those places is at the backend (or 'server side'). Where the data that you touch at the frontend of a web page is processed on a server.
* You can work with backend with Node Js, it make sense with frontend and backend work with same language, many frontend developer can write backend with node js. But it comes with somethings like high resource requirements. Like handled ten thousands of of requests at the same time. I don't think if we handle this case with Node JS is a good idea. In case you need something faster, more efficient, C++ is a choice, is a right choice.

* Other place they overlap is in game design. If you create game and it need more calculation, C++ is fast and efficient, it does a good job, making these fast yet complicated calculations without consuming too much of your already strained hardware.

* JavaScript is the opposite. It's easy to type and to learn, but by comparison, it's slow and limited in its features. JavaScript is only really meant for browsers, so most of the games one would make JS 2D.
  You can make 3D games with JavaScript too, but maybe, some part of it support by C++.

JavaScript vs C++: Community

- C++ live much longer
- JavaScript is only language for web fron-end.

9. biết đến LINE như thế nào, biết những gì về LINE

10. à, còn hỏi là tại sao theo frontend

11. à còn hỏi quen làm việc với React hay sao

12. phỏng vấn xong thì HR vào hỏi tình hình này nọ, có bức xúc gì cứ trình bày để ng ta biết

13. ổng hỏi học js bao lâu rồi

14. sort

- đến phần code là ại sort, sort gì cũng đc tự chọn
  Phan Đặng sent Today at 08:22
  mà t nghĩ chọn mấy cái O(n^2) ko ổn

  Merge sort

- Auxiliary Space: O(n)
- Space: O(nlogn)

Quick Sort:

- best: On
- average: O(nlogn)
- worst: O(n^2)

15. rồi hỏi javascript hoạt động trên browser như thế nào? Chắc là V8 engine rồi parse code, compile này nọ

16. this
    https://dmitripavlutin.com/fix-this-in-javascript/

# This is an object, in Java, C++, ... this is cuerrent object in class method.

- we have 4 tyoes if function invocations

* function invocation
* method invocation
* new constructor invocation
* indirect invocation

17. lexical scope and closures

# Simplest, the lexical scoping means that inside the inner scope you can access variables of the outer scopes.

- Explain:

* I can see you define a functon outerFunc() that has a variable outerVar.
* Inside the outerFunc(), I can see you define a function innerFunc()
* Inside the innerFunc(), I can see a variable outerVar without declaration. Since I use lexical scoping, I consider the variable outerVar inside innerFunc() to be the same variable as outerVar of outerFunc()

# The closure is a function that accesses its lexical scope even executed outside of its lexical scope.

18. mutable and immutable

- Understanding Immutability in JavaScript
- const is not immutability, it is just not change
- React has concept mutating states is a bad ideas, the same to props. Yet, it is important to know that immutability is not a React concept. React just happen to make use of this concept.
- Mutability is about sticking to the facts:

* Immutable data cannot change its structure or the data in it.
* Objects and arrays is mutation => data structure can be changed.
* We want to make sure that our object isn't mutated. If we're going to make use of a method, it has to return a new object. In essence, we need something called a pure function. => it return new object
  Pure function has two properties that make it unique

1. The value it returns is dependent on the input passed. The return value will not change as long as the inputs do not change.
2. It does not change things outside of its scope.

- How to make object doesn't mutation => use Object.assign({}, obj, {b: "a"})

- Immutability in React

* Immutability, when enforces, makes it possible to keep trach of those changes. This allows React to compare the old state if an Object with it's new state and re-render the component base on that difference.

4. oop

- four principles of oop:

* Abstraction
* Polymorphism
* Inheritance
* Encapsulation

10. Primitive types vs Objects in Javascript

- Primitive types in JavaScript:

* strings
* numbers (Number and BigInt)
* booleans (true or false)
* undefined
* Symbol values

* Note: null is a special primitive type. If you run typeof null, you'll get 'object', but it's acttually a primitive type.
* Everything that is not primitive type is an object.
* Function are objects, too. We can set properties and method on function. typeof function will return function, but the function constructor drives from Object constructor.

- Differences between primitive types and objects are:

* primitive types are immutable, objects only have an immutable reference, but their value can change over time.
* primitive types are passed by value. Objects are passed by reference (Except string).
* primitive types are copied by value. Objects are copied by reference
* primitive types are compared by value. Objects are compared by reference

- Important Guidelines

* All primitive values are immutable
* Be aware of type coercion
* There is no static typing
* The JavaScript engine decides what type it is.

- Some confusing Parts:

* Why is Null an Object?
  Documentation lists null as a primitive type, yet its typeof returns 'object'.

Basically, this is a bug that isn't fixed.

- Why is not a number a number?
  NaN is defined as a numeric type, but it's not a real number. NaN is the result of some mathematical operations that can't be quantified as a number.

- A primitive is not an object and has no methods of its own

* First, do not confuse constructors with primitives - every primitive has a constructor or parent object. JS knows when you're trying to access a method on a primitive and behind the scenes, it will use the constructor to make an object out of your primitive. Once it runs the method that object is then garbage collected (removed from memory).

* Strings are in fact primitives as described in the article, not entire objects. JS know when you try to access a method on the String object end coerces your primitive into a string object. When it's done the temporary object is garbage collected and life continues as usual.

7. so sanh dom ao moi va dom ao cu

- What is the Virtual DOM?
- The virtual DOM is a programming concept where an ideal, or "virtual", representation of a UI is kept in memory and synced with the "real" DOM by a library such as ReactDOM.
- DOM: Document Object Model

* Real DOM: DOM stands for "Document Object Model". The DOM in simple is represent th UI of application.
  Everytime there is a change in the state of your application UI, the DOM gets updated to represent that change.
* Frequently manipulating the DOM affects performance -> make it slow.
* What makes DOM manipulation slow?: The DOM represented as a tree data structure. -> change and updates to the DOM are fast. But updated element and it's children have to be re-rendered to update the application UI.
* The re-rendering or repainting of the UI is what makes it slow. -> the more component you have, the more expensive the DOM updates could be.
* VIRTUAL DOM:

- Virtual DOM is only a virtual representation of the DOM.
- Everytime the state of our application changes, the virtual gets updated instead of the real DOM.
  ?. Isn't the virtual DOM doing the same thing as the real DOM, this sounds like double work? How can this be faster than just updating the real DOM?

-> Virtual DOM is much faster and efficient, here is why

- How is Virtual DOM faster?

* when have a change, a virtual DOM, represented as a tree is created. Each element is a node on this tree.
* If the state of any of these elements changes, a new virtual DOM tree is created. This tree is then compared or "diffed" with the previous virtual DOM tree.

Once this is done, the virtual DOM calculates the best possible method to make these changes to the real DOM.

- How does React use Virtual DOM:

* React UI piece is a component
* each component has a state
* react follows the observable pattern and listens for state changes.
  state change -> react updates the virtual DOM tree.
* virtual DOM updated -> compoares the current version of the virtual DOM with the previous version of the virtual DOM -> diffing
* React knows which virtual DOM objects have changed, then React updates only those objects, in the real DOM.
* render() function is the point of entry where the tree of React elements are created.
  state or props within the component is updated, the render() will return a differenct tree of react elements.
  If you use setState() within the component, React immediately detects the state change and re-renders the component.

Recap:

- Frequent DOM manipulations are expensive and performance heavy.
- Virtual DOM is a virtual representation of the real DOM.
- When state changes occur, the virtual DOM is updated and the previous and current version of virtual DOM is compared. This is call diffing
- The virtual DOM then sends a batch update to the real DOM to update the UI
- React uses virtual DOM to enhance its performance
- It uses the observable to detect state and prop changes
- React uses an efficient diff algorithm to compare the versions of virtual DOM.
- It then makes sure that batched updates are sent to the real DOM for repainting or re-rendering of the UI.

7. The difference Between Values and References in JavaScript

- Values: Passing by value means that every time you assign a value to a variable, a copy of that value is created. Every single time.
  -> The simple rule: all primitive values in Javascript is passed by value.

- References: When creating an object you're given a reference to that object. If 2 variables hold the same reference, then changing the object reflects in both variables.

- String is just special case: string is immutable, immutable is when it created, you can't change structure and data in it.
  immutable is pass by value, except string.
  Because it copy string is very expensive operation, so they don't do it.
- String pass by reference, but when you do something in function, it will create entirely new string.

7. Differences Between Arrow and Regular Functions

- You can defined JavaScript functions in many ways

```
// Function declaration
function greet(who) {
  return `Hello, ${who}`;
}

// Function expression
const greet = function(who) {
  return `Hello, ${who}`;
}
```

The function declaration and function expression -> reference at regular function.

- The second way, available starting ES6, is the arrow function:

```
const greet = (who) => {
  return `Hello, ${who}`;
}
```

1 ) this value:
1.1 ) Regular function
Inside regular function, this value is dynamic, it depend on how the function is invoked. There are 4 ways you can invoke a regular function.

- simple invocation: this value equal to global object

```
function myFunction() {}
myFunction()
```

- method invocation: this is object owning the method:

```
const myObject = {
  method() {}
};
myObject.method();
```

- indirect invocation: this equals to the first argument

```
function myFunction() {
}
myFunction.call(myContext);
```

- constructor invocation: this equals to the newly created instance.

```
function MyFunction() {
  console.log(this);
}
new MyFunction();
```

1.2 ) Arrow function

- The behavior of this inside of an arrow function differs considerably from the regular function's this behavior. The arrow function doesn't define its own execution context.
- this value inside of an arrow function always equals this value from the outer function. In other words, the arrow function resolves this lexically.
- you can't change this value of this, by indirect invocation.

2 ) Constructors:
2.1 ) Regular function

- The regular function can easily construct objects.

```
function Car(color) {
  this.color = color;
}
const redCar = new Car('red');
redCar instanceof Car; /// => true
```

- When invoked with new keyword, new Car('red') - new instances of Car type are created
  2.2 ) Arrow function
- A consequence of this resolved lexically is that an arrow function cannot be used as a constructor.

3 ) arguments object:
3.1 ) Regular function

- Inside the body of a regular function, arguments is a special array-liek, object containing the list of arguments with which the function has been invoked.

```
function myFunction() {
  console.log(arguments);
}
```

3.2 ) Arrow function

- No arguments special keyword is defined an arrow function

```
function myRegularFunction() {
  const myArrowFunction = () => {
    console.log(arguments); // arguments with outside
  }

  myArrowFunction('c', 'd');
}

myRegularFunction('a', 'b');
```

4 ) Implicit return:
4.1 ) Regular function

- if the return statement is missing, or there's no expression after return statement, the regular function implicitely return undefined:

```
function myFunction() {
  return 42;
}
```

4.2 ) Arrow function

- You can do like regular expression or more implicitly returned:

```
const increment = (num) => num + 1;
increment(42);
```

5 ) Methods:
5.1 ) Regular function

```
class Hero {
  constructor(heroName) {
    this.heroName = heroName;
  }

  logName() {
    console.log(this.heroName);
  }
}
const batman = new Hero('Batman);
// setTimeout(batman.logName, 1000);
setTimeout(batman.logName.bind(batman), 1000);
```

5.2 ) Arrow function

```
class Hero {
  constructor(heroName) {
    this.heroName = heroName;
  }

  logName = () => {
    console.log(this.heroName);
  }
}
const batman = new Hero('Batman');
```

8. Scope

# The scope is a policy that manages the accessibility of variables.

# When you define a variable, you want it to exist within some boundaries. It obvious, I don't think we have enough strength to think thousand name of variables.

- Block Scope
- Function scope
- Module cope
- Scopes can be nested
- Global Scope
- Lexical Scope
- Variables isolation

9. Stateful and Stateless Component

# The stateful has state, and stateless doesn't. That means the stateful components are keeping track of changing data, while stateless components print out what given to them via props, or they always render the same thing.

10. Compare class and hooks

- It's hard to reuse stateful logic between components
- Complex components become hard to understand
- class confuse both people and machines.

11. Line philosophy

LINE STYLE

- Users Rule
- Stay a Step Ahead
- Perfect Details
- Always Data-driven
- Perfect Detail
- Always Data-driven
- Build Lean and Exceptional Team
- Open Communication, Vertical Decision-making
- Keep in Sync, Aiming for the Same Goal
- Work Intensely and Be Focused.
- 1% Problem-finding, 99% Solution-making
- Go Brave. No fear. No Regrets
- Enjoy the Challenges

LINE CODE

- Pride
- Respect
- Collaboration
- Fairness

11. What make JavaScript JavaScript?
    JavaScript has only primitives types (number, string, symbol, null, undefined), null, undefined and objects

# Master Javascript: 10 interview question

https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95

# Class vs Prototypal inheritance

- Three type of prototypal OO

* Concatenative inheritance: Object.assign
* Prototype delegation: Object.create
* Functional inheritance
