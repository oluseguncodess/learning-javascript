let counter = 0;

let labelValue = document.getElementById("labelValue");

document.getElementById("decrease").onclick = () => {
    counter--;
    labelValue.textContent = counter;
}

document.getElementById("reset").onclick = () => {
    counter = 0;
    labelValue.textContent = counter;
}

document.getElementById("increase").onclick = () => {
    counter++;
    labelValue.textContent = counter;
}

