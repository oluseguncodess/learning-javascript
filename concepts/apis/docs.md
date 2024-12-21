# Learning about Apis

## What are interfaces 📲 ?

- Theses are hardware or software that help us do specific things. They abstract the core complex way of doing task -- i know what it does, i just don't know how it does it (in the words of the instructors)

e.g a play button for example is used to play a song, a user on spotify doesn't have to write the code to do that, that programmer does the writing of the code, the user just has to click the button(how i understand it lol)

- Interfaces abstracts implementation

## What are api's 🤖 ?

- Application programming interfaces define how interfaces are expected to be used and what you can expect to receive when using interfaces without bothering about how they work -- this is the power of abstraction, helps prevent always reinventing the wheel 🎡

- It's mostly used as an intermediary between softwares and states how they should interact

## What are remote api's 🎮 ?

These are api's that aren't running directly on your devices but on the internet. They have massive computational power and are quite fast. E.g singing into google song search microphone to well, search for a song. example is the popular REST api.

## How does the web work 🕸 ?

- There's the client side and the server and most times, data needs to be gotten from the server(database) so it can be rendered on the client(web browser).

- This happens by using a http/https protocol which stands for **H**yperText **T**ransfer **P**rotocol -- (this is a contract, which outlines how a server should **RESPOND** to a specific **REQUEST** made by a client) -- http request are stateless, meaning the server won't remember the client that sent the request

- When you search for a page on a web browser, by inputting a URL, you are making a **GET** request to a server which responds to what ever page you request for over the hypertext transfer protocol.

## What makes an API RESTFUL?

- Client-server architecture -->  There's communication the client and server

- Statelessness --> The server by default doesn't remember every client that makes a request 

### Resources

- [Learn REST APIs by Building a JavaScript Project](https://www.freecodecamp.org/news/learn-rest-apis-javascript-project/)

- [APIs for Beginners - How to use an API by FreeCodeCamp](https://www.youtube.com/watch?v=WXsD0ZgxjRw) -- i highly recommend this course!


