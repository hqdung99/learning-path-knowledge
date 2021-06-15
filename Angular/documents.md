# Introduction

- Angular is:

* Framework
* single-pages app

# Getting Started

## What is Angular?

1. What is Angular? What advantages it provides? What you might expect?

- Development platform
- Built on TypeScript
- Angular includes:
  - Components based framework
  - collection of well-intergrated libraries: routing, forms management, client-server communication.
  - suite developer tool
- Angular design to make updating code easy

2. Angular applications: The essentials

- Core ideas behind Angular

## Components:

building blocks that compose an application. Incudes a TypeScript class with a @Component() decorator.

- An HTML template, and styles. The @Component() decorator specifies the following Angular-specific information.
  - A CSS selector that defines how the component is used in a template. HTML elements in your template that match this selector become instances of the component.
  - An HTML template that instructs Angular how to render the component.
  - An optional set of CSS styles that define the appearance of the template's HTML elements.

```
import { Component } from "@angular/core";

@Component({
  selector: 'hello-world',
  template: `
    <h2>Hello World</h2>
    <p>This is my first commponent!</p>
  `,
});

export class HelloWorldComponent {

}

<hello-world></hello-world>

<hello-world>
  <h2>Hello World</h2>
  <p>This is my first component!</p>
</hello-world>
```

- Angular's component model offers strong encapsulation and an intuitive application structure.
- Easy to unit test

## Templates

- Angular automatically updates the rendered DOM when your component's state changes.

```
@Component ({
  selector: 'hello-world',
  templateUrl: './hello-world.component.html',
})

export class HelloWorldComponent {
  message = 'Hello World';
  fontColor = 'red';
  canClick = false;

  sayMessage() {
    alert(this.message);
  }
}

<p [style.color]='fontColor'>{{message}}</p>
<button
  (click)="sayMessage()"
  [disabled]="canClick">Trigger alert message<button>
```

- Angular's declarative templates allow you to cleanly separate your application's logic from its presentation. Templates are based on standard HTML, so they're easy to build, maintain, and update.

## Dependency injection

# Try it

## Getting started

- Component consists of three things:

* A component class that handles data and functionality
* An HTML template that determines the UI
* Component-specific styles that define the look and feel.
