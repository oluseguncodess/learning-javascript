function task1(callback) {
    setTimeout(() => {
        console.log("1. Go to shop");
        callback();
    }, 2000);
}

function task2(callback) {
    setTimeout(() => {
        console.log("2. Ask for bread");
        callback();
    }, 5000);
}

function task3(callback) {
    setTimeout(() => {
        console.log("3. Buy bread");
        callback();
    }, 3000);
}

function task4(callback) {
    setTimeout(() => {
        console.log("4. Walk back home");
        callback();
    }, 6000);
}

function task5(callback) {
    setTimeout(() => {
        console.log("5. Eat bread");
        callback();
    }, 1000);
}

// this will run the asynchronous functions sequentially - this however is a callback hell
task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                task5(() => {

                })
            })
        })
    })
});

