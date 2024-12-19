// using the async keyword makes a function return a promise e.g Promise((resolve, reject) => { resolve(code)})

const getPromise = async () => "Hello" // arrow functions automatically returns the value "Hello"

// we then consume the promise using the .then() and running a function in it
getPromise().then((value) => console.log(value));