// // A promise is a guarantee that something will happen in the future - it's an object that holds the future value of an async operation

// // Promises have 3 states - pending, fulfilled and rejected

// // resolve is the 'fulfilled state', while reject is the 'rejected' state 

// producing code below 👇🏾 - might take some time 
const promise = new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10)

    setTimeout(() => {
        if (randomNumber < 4) {
            resolve("Well done, you guess right!")
        } else {
            reject("Oops! You guessed wrong! Unlucky")
        }
    }, 2000)
})

// We can now consume the promise - use what we get after the promise has either been fulfilled(resolved) or rejected

// consuming code - must wait for the results of the promise 

// note that then() is for resolve() while catch() is for reject 
promise.then(value => console.log(value)) 
.catch(error => console.log(error))

// dealing with multiple promises --> correct way
const promise1 = new Promise((resolve, reject) => {
    resolve("Weldone! Promise 1 is resolved")
})

const promise2 = new Promise((resolve, reject) => {
    resolve("Weldone! Promise 2 is resolved")
})

const promise3 = new Promise((resolve, reject) => {
    reject("Promise 3 is rejected. Unlucky!")
})

promise1
.then((value) => {
    console.log(value)
    return promise2
})
.then((value) => {
    console.log(value)
    return promise3
})
.catch((error) => {
    console.log(error)
})

const promises = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("I love you!!!!!")
    }, 3000)
})

promises.then((value) => console.log(value))