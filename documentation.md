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

## Scope and Functions

Scope defines the visibility of variables.

- Global Scope: Variables can be accessed throughout the JavaScript code.
- Local Scope: Variables are only accessible within a specific portion of the code.

## Conditionals

Conditional statements are used to execute different actions based on different conditions.

## JavaScript Objects

JavaScript objects are used to store data using key-value pairs.

## Loops

Loops are used to iterate through data until a certain condition is met.

## Tertiary Operator

The ternary operator provides a shorthand for if-else statements.

## JavaScript Methods

- `.length`: Returns the length of data.
- `.hasOwnProperty()`: Checks if an object has a property.
- `Object.freeze()`: Freezes an object to prevent mutation.
- `.concat()`: Concatenates arrays.
- `.append()`: Adds specified content as the last child of the selected element(s)

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
 
## JavaScript Operators

- Rest operator: `...variable` - Converts arguments into an array.
- Spread operator: `[...variable]` - Expands elements of an array.

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







