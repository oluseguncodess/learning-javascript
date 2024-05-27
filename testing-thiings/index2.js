const demo = document.querySelector("#demo")

const person = {
    fullName: "Olusegun",
    surname: "Bamgbelu",
    age: 23,
    fullname: function() {
        return this.fullName + " " + this.surname;
    }
}
//Loops 
let text = "";
for (let i = 0; i < 6; i++) {
    text += `This number is ${i} <br>`
}

demo.innerHTML = text