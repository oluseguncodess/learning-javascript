// grab the button
const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const UlEl = document.querySelector("#ul-el");
const deleteBtn = document.querySelector("#delete-btn");
const saveTab = document.querySelector("#save-tab");

// create an array where you save the leads!
let myLeads = [];

//get previous leads from local storage so when a refresh occurs, you can keep rendering
//what's in the local storage!!!

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads)
}
const tabs = [
    {url: "https://www.linkedin.com/in/olusegunbamgbelu/"}
]
//create an event listener for the tab button!!

saveTab.addEventListener("click", () => {
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
});

// create an event listener for the input button!

inputBtn.addEventListener("click", () => {
    
    if (inputEl.value === "") {
        alert("Input your leads")
    } else {
        myLeads.push(inputEl.value);
        inputEl.value = "";
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    }
});

// create an eventlistener for the delete button!!

deleteBtn.addEventListener("dblclick", ()=> {
    // clear out local storage;
    localStorage.clear();

    // clear out my leads;
    myLeads = [];
    UlEl.innerHTML = "";
});

//  Create a function that renders the saved leads!!

function render(leads) {
    let listItems = "";

    for (let i = 0; i < leads.length; i++) {
        listItems  += `
            <li>
                <a href="${leads[i]}" target="_blank">${leads[i]}</a>
            </li>
        `
        ; 
    } 
    
    UlEl.innerHTML = listItems
}



