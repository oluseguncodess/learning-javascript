let count = 0; 

let countEl = document.querySelector("#count-el");
let saveEl = document.querySelector("#save-el");

function increment() {
    count += 1;
    countEl.textContent = count
}

function save() {
    saveEl.textContent += `${count} - `
    countEl.textContent = 0;
    count = 0;
}