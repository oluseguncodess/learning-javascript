// Here is where we test, debug and console log our javascript code!!!

//get all the list items 

const listContainer = document.querySelector("#list-container");

listContainer.addEventListener("click", (e) => {
    console.log(e.target.innerText);
})


