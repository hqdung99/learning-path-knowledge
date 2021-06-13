# Imperative programming vs Declaration programming

"You know, imperative programming is like how you do something, and declarative programming is more like what you do, or something" - Fuck you.

- Many (if not all) declarative approaches have some sort of underlying imperative abstraction.

- Some language inherently declarative versus those which are more imperative by nature.
  - Imperative: C, C++, Java
  - Declarative: SQL, HTML
  - (Can be) Mix: Javascript, C#, Python

```
SELECT * FROM Users WHERE Country="Mexico";
```

```
<article>
  <header>
    <h1>Declarative Programming</h1>
    <p>Sprinkle Declarative in you verbiage to sound</p>
  </header>
</article>
```

=> concerned with WHAT you want to be done, rather than HOW you want it done.

- Imperative:
  - Describe how to make it
  - Mutate state
  - Not readable, go through the code like interpreter to understand
- Declarative:
  - Describe WHAT is happening
  - Can't mutate state
  - Should be readble at a glance

=> The most declarative solutions are an abstraction over some imperative implementation

- The real beauty of React is that you can create these declarative user interfaces.
- Functional programming is a subset of declarative programming

# Reactive Programming

https://gist.github.com/staltz/868e7e9bc2a7b8c1f754

1. Reactive Programming is programming with asynchronous data streams

- data streams are going to be the spine of your application
- events, messages, calls, and even failures are going to be conveyed by data stream
- you observe these streams and react when a value is emitted.

2. Observables can be cold or hot-and it matters.

- You are given an amzaing toolbox of functions to combine, create and filter any of those streams
  -> functional magic kicks in.
- a stream can be used as an input to another one
- You can:
  - merge two streams
  - filter a stream to get another one that has only those events you are interested in
  - Map data values from one stream to another new one.
- A stream is a sequence of ongoing events ordered in time
- It can emit three different things:
  - a value (of some type)
  - an error
  - a completed
- We capture these emitted events only asynchronously, by defining a function that will execute when a value is emitted
- the listening to the stream is called subscribing
- the functions we are defining are observers
- The stream is the subject (or "obserable") being observed.
