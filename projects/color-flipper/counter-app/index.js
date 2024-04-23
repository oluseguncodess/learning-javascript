let count = 0; 
let incrementBtn = document.querySelector("#increment-btn");
let saveBtn = document.querySelector("#save-btn");

let countEl = document.querySelector("#count-el");
let saveEl = document.querySelector("#save-el");

function increment() {
    count += 1;
    countEl.textContent = count
}

function save() {
    let text = "Previous entries :";
    saveEl.textContent = `${text} ${count}`
}