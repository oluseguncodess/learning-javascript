// grab the button
const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const UlEl = document.querySelector("#ul-el");

localStorage.setItem("myLeads", "")

let myLeads = [];
// add event listener.
inputBtn.addEventListener("click", () => {
    
    if (inputEl.value === "") {
        alert("Input a website")
    } else {
        myLeads.push(inputEl.value);
        inputEl.value = "";
        renderLeads();
    }
});

function renderLeads() {
    let listItems = "";

    for (let i = 0; i < myLeads.length; i++) {
        listItems  += `<li><a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a></li>`;  
    } 
    
    UlEl.innerHTML = listItems
}



