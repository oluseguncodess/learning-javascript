// grab the button
const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const UlEl = document.querySelector("#ul-el");

let myLeads = ["wwwww", "jsede"];
// add event listener.
inputBtn.addEventListener("click", () => {
    myLeads.push(inputEl.value);
    // console.log(myLeads);
});


for (let i = 0; i < myLeads.length; i++) {
    UlEl.innerHTML += `<li> ${myLeads[i]}</li>`;
} 
