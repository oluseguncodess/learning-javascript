# JavaScript Documentation

## Commenting Out Code

- **Single-line comment:** `//`
- **Multi-line comment:** `/* */`

## Variables

Variables are used to store data. There are three ways to declare a variable:

- **let:** Block-scoped variable.
- **const:** Constant variable, its value cannot be changed once assigned.
- **var:** Function-scoped variable.

## Accessing Individual Characters in a String Variable

In JavaScript, individual characters in a string variable can be accessed using bracket notation.

## Arrays

Arrays allow storing multiple values, which can be of different data types.

## Functions

Functions are blocks of reusable code that can be invoked as needed.

Note - they can be hoisted! 

Built in functions 
- `Math.random()` - generates random numbers between 0 - 1 (not inclusive of 1)
- `Math.floor()` - returns the largest interger

## Scope and Functions

Scope defines the visibility of variables.

- Global Scope: Variables can be accessed throughout the JavaScript code.
- Local Scope: Variables are only accessible within a specific portion of the code.

## Conditionals

Conditional statements are used to execute different actions based on different conditions.

## JavaScript Objects

JavaScript objects are used to store data using key-value pairs.

Objects that have keys who's values are functions, the values can be referred to as methods. 

## Loops

Loops are used to iterate through data until a certain condition is met.

- For/in - used to loop through an object's property

## Tertiary Operator

The ternary operator provides a shorthand for if-else statements.

## JavaScript Methods

- `.length`: Returns the length of data.
- `.hasOwnProperty()`: Checks if an object has a property.
- `Object.freeze()`: Freezes an object to prevent mutation.
- `.concat()`: Concatenates arrays.
- `.append()`: Adds specified content as the last child of the selected element(s).
- `.matches()`: determine whether or not an element matches a specific CSS selector.
- `.forEach()`: adds a function to every element in an array(doesn't create a new array)
- `.filter()`: this separates a specified element in an array.

## JavaScript Functions

- `.push()`: Adds a value to an array.
- `.pop()`: Removes and returns the last value in an array.
- `.includes()`: Checks if a value is in an array.
- `.shift()`: Removes the first element in an array.
- `.unshift()`: Adds an element to the beginning of an array.
- `.reduce()`: Reduces an array using a callback function.
- `.add()`: Used to adding something.
- `remove()`: Used in removing something.
- `contains()`: Used to check if something has something.

## Javascript Keyword
- `delete`: This can be used to delete for example a property in an object
 
## JavaScript Operators

- Rest operator: `...variable` - Converts arguments into an array.
- Spread operator: `[...variable]` - Expands elements of an array - https://kinsta.com/knowledgebase/spread-operator-javascript/    
- new operator: `new` - creates a new object usinf a constructor function. 
- instanceof: - checks if something is an instance of something

## Javascript properties 

`.value` - this can be used to set or return the value in an input field

## String Interpolation

String interpolation allows combining strings and variables together using backticks (\`).

# DOM Manipulation

It's a way of manipulating HTML elements using Javascript. 

![image of a dom tree](/images/image.gif)

## Methods of manipulation 😈

### Create and remove html elements
`createElement(’element’);`
`selectedDOMElement.remove();`

### Manipulate HTML attributes

#### To access an attribute 
* `selecetdDOMElement.attributes` - get a list of attribute(s) you can select from

* `selectedDomElement.className` - get every class attribute 

* `element.setAttribute(’attribute’, ‘content’);` - set an attribute

* `element.removeAttribute(’attribute’);` - delete an attribute

* `selectedDOMElement.getAttribute(”attribute”);` - get an attribute 

### Modify HTML classes

#### To access the class of an element
`selectedDOMElement.classList;` - gives the list of classes of a selected element in an array.

#### To add another class to an element
`selectedDOMElement.classList.add("class");` - uses the `.add()` function to add class to a selected element's class attribute. 

#### To remove an existing class of an element
`selectedDOMElement.classList.remove("class)` - uses the `.remove()` function to remove class of a selected element's class attribute. 

#### To check if an element has a particular class
`selectedDOMElement.classList.contains()` - checks if a selected element has a particular class using the `.contains()` function

### Traverse in DOM 

This is a way of travelling through the DOM. However, before delving into the code to do that, i'll like to explain the difference between a node and a element in DOM.

### Differences between HTML Nodes and Elements

- Nodes are elements nodes, text nodes(includes whitespace) and comment nodes
- Elements are simply element nodes

#### Traverse upwards
- `selectedDOMElement.parentNode` - gets the parent node of selected element.

- `selectedDOMElement.parentElement` - gets the parent element of selected element.

#### Traverse downwards

- `selectedDOMElement.childNodes` - gets the child node of selected element.

- `selectedDOMElement.children` - gets the child element of selected element.

- `selectedDOMElement.firstChild` — gets the text of the first child node of selected element
    
- `selectedDOMElement.lastChild` — gets the text of the last child node of selected element

#### Traverse sideways
- `selectedDOMElement.prevElementSibling` — gets the next element after selected element
        
- `selectedDOMElement.nextElementSibling` — gets the previous element before selected element

## Event Listeners

They allow us to add interactive functionality to HTML elements by listening to different events that happen on a page.

**Ways of adding event-listeners**

- adding it directly in the html elements
- adding it using the addEventListener method

**Events**


<details>
<summary> "click" - listens to a click</summary>
<code style="white-space:nowrap;">element.addEventListener(”event”, function);</code>
</details>

<details>
<summary> "mouseover " - listens to the movement of a mouse</summary>
<!-- <code style="white-space:nowrap;">element.addEventListener(”event”, function);</code> -->
</details>


### Event Propagation

This is a way to dictate how events travel through the DOM when an event occurs, reaches it's target and possibily executing further actions based on the event. 

It's a great way to bring structure to event handling. 

#### Phases of event propagation
1. Capturing phase - this is the first phase of event propagation whereby an event travels from the root of the dom element to the target element when triggered. 

    <details>
    <summary> NOTE - event listeners can be triggered if set to capture mode.</summary>
    <code style="white-space:nowrap;">element.addEventListener("click", eventHandler, { capture: true });</code>
    </details>

2. Target Phase - This is the second phase whereby the event reaches the target element on which the event was triggered.

3. Bubbling Phase - This is the thired and final stage whereby the event that was triggered travels back up to the root of the DOM. It can also trigger other event listeners if they are set to bubble mode. 

### Event Delegation

This is a way of adding a single event listener with the same function and logic to multiple elements by attaching it to a common parent/ancestor rather than to multiple child elements. 

This can work because of the "bubble phase" of event propagation. It's more efficient and it's clean code. 

# JSON 

This stands for javascript object notation.

It's commonly used to exchange data to/from a web server. 

When getting data from a web server, it's gotten in form of a string. You convert this data to javascript objects using `JSON.parse()` 

When sending data to a web server, it has to be in string format. You can convert Javascript object to strings using `JSON.Stringify()`

JSON syntax are like javascript syntax. It is however plain-text. 


# What is localStorage?

This is used to create an object with key - value pairs in a web browser. 

It does this permanently and doesn't change even if the browser has been closed. 

Note - Everything stored in localStorage has to be string!

## Using localStorage 

- `setItem(key, value)` - this is used to set the key and value in the local storage

- `clear()` - used to remove all key and values in the local storage

- `getItem(key)` - this is used to get a value of a key in the local storage

# Truthy and Falsy values 

### List of falsy values 
- `0` 
- `""` 
- `null` 
- `undefined`
- `false`  
- `NaN` 

# Object-Oriented programming with Javascript
This is a programming paradigm(a way of programming, using certain principles, techniques and practices for designing, structuring and implementing computer programs) based on the concepts of objects.

Objects contain properties and methods.  With OOP, you can create a blue-print that multiple objects can be made out of rather than manually creating multiple object literals that have the same properties and methods!

## 4 pillars of object-oriented programming  
- Inheritance - This allows you to create a new class based on an existing class. This means we can make an object inherit the properties and methods of another object. It allows us to reuse code!

- Encapsulation - this is the process of hiding an object's property from the outside world(other objects).  

- Abstration - This is a way of hiding implementation details and only revealing functionality. It's showing only required details and hiding the rest e.g hides property, shows method.

- Polymorphism - This means different forms. It's creating that have the same name but different functionality.  

## What's a constructor function?
it's a way in which we can create several instances(objects) of a class (blueprint). It's acts as a template for creating objects. 

### What does the new operator do?
It does three things which are;

- It creates a new object on a constructor function
- It ensures that `this` variable points to the object e.g so when you put data in the constructor, it actually assigns it to the 'this' object property. 
- Returns the object

## Prototype and Inheritance 
Prototypes is the way that Javascript inherits features(methods) from one another. Every object has a prototype property. 

You can implement prototype inheritance using `Object.create()` method.

### Prototype chaining 
Apparently 😂, when you create an object literal in Javascript. The object you created is also an instance(object) of an object constructor 

This means that every object created is an instance of an Object constructor and when we create an new object, we are actually creating an instance of an object constructor. 

Prototype chaining means that instances of an object can access the prototype of both it's object and the object constructor!

## Javascript Class
This is a blueprint that helps us to instanciate objects! They also make use of inheritance and prototype! It's like a better way of using constructor functions and prototype inheritance!

Note - Classes cannot be hoisted. they are first class citizen(you can pass a class as an argument in a function and can return a class in a function.). Classes are executed in strict mode!

## Getter and setter properties in Javascript
In javascript, there are mainly two types of object properties which are data properties and accessor properties. 

Data properties are those propers that are set while accessor properties are methods that set and get the properties of an object.

NOTE - These methods are called properties because they are stored and accessed as properties in an object!

### Types of accessor properties
1. Getter properties - used to read an object's property value using the `get` keyword.
2. Setter Properties - used to set an object's property value using the `set` keyword. 
NOTE - Setter function must have a value as an argument!

#### Why do we need setter and getter properties? 
In order to hide the properties of an object from the outside world! This is what encapsulation is all about!

Also, it can be used to set or add to a property afterwards like adding a calculated value.

## what are Static methods
These are methods that are on the class or an object. They are called directly on the class/object. They cannot be called on an instance

You create a 'static method' using the `static` keyword! This would make the object not viewable in the object as it is attached just to the class and not the class instance 

Instance methods are methods that are instances of a class or an object. They are called by accessing instances of an object. 

## Inheritance between two classes 

When creating a new class and we want it to inherit properties from another class, we use the key word `extends` and the other classes name 

When creating the classe's constructor, we use the key word `super()` under the constructor to refer to the parent class so we can easily inherit it's property.

## Javascript Sets
Sets are objects in javascript used to store unique values that can only occur once within the set

## Javascript Promise
It's like an object that links producing code to consuming code. Producing code can take some time while consuming code waits for results.
