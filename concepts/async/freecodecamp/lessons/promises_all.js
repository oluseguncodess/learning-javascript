// promise all can be used to handle multiple promises. 

// NOTE -- However, if one of the promises has a reject state, then() doesn't activate even if one of the promise is in a resolved state

const promise1 = new Promise((resolve, reject) => {
    resolve("Great job!")
})

const promise2 = new Promise((resolve, reject) => {
    reject("Bad job!")
})

Promise.all([promise1, promise2])
.then((data) => console.log(data[0], data[1]))
.catch((error) => console.log(error))