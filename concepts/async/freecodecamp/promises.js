// A promise is a guarantee that something will happen in the future - it's an object that holds the future value of an async operation

// Promises have 3 states - pending, fulfilled and rejected

// resolve is the 'fulfilled state', while reject is the 'rejected' state 

// producing code - might take some time 
const promise = new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10)
    console.log(randomNumber)

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
promise.then(value => console.log(value))
.catch(error => console.log(error))