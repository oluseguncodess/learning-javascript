// grab the button
const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const UlEl = document.querySelector("#ul-el");
const deleteBtn = document.querySelector("#delete-btn");

// create an array where you save the leads!
let myLeads = [];

//get previous leads from local storage so when a refresh occurs, you can keep rendering
//what's in the local storage!!!

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads()
    console.log(myLeads);
}

// add event listener to button!

inputBtn.addEventListener("click", () => {
    
    if (inputEl.value === "") {
        alert("Input a website")
    } else {
        myLeads.push(inputEl.value);
        inputEl.value = "";
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        renderLeads();
    }
});

//  Create a function that renders the saved leads!!

function renderLeads() {
    let listItems = "";

    for (let i = 0; i < myLeads.length; i++) {
        listItems  += `
            <li>
                <a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a>
            </li>
        `
        ; 
    } 
    
    UlEl.innerHTML = listItems
}



