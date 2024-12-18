const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37}
];

const totalCalories = fruits.reduce((accumulator, currentValue) => accumulator + currentValue.calories, 0);
console.log(`This object has ${totalCalories} calories`);

const maxCalories = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);

console.log(maxCalories);

