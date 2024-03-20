// MULTIPLY NUMBERS IN A NESTED ARRAY
function multiply(arr) {

    let product = 1; 

    for(i = 0; i < arr.length ; i++) { // this loops through the provided array
        for (j = 0; j < arr[i].length; j++) {
            product *= arr[i][j]; 
        } 
    }

    return product; // returns final product 
}

console.log("Final product: " + multiply([[2,3], [5,6], [7,8]])); //Call the function