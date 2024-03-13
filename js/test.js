let carColors = {
    tesla: "red",
    toyota: "black",
    "mercedis beanz": "grey"
};

function checksProperties(check) {
    if(carColors.hasOwnProperty(check)) {
        return carColors[check]
    } else {
        return "Not Found";
    }
}

console.log(checksProperties("tesla "));