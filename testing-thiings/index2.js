function hello(callback) {
    console.log("Hello!");
    callback()
}

function goodbye() {
    console.log("GoodBye!");
}

function leave() {
    console.log("Leave!");
}

hello(goodbye)