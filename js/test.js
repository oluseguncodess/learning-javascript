// Here is where we test, debug and console log our javascript code!!!

const result = {
    success: ["max-length", "no-amd", "prefer-arrow -functions"],
    failure: ["no-var", "ar-on-top", "line-break"],
    skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
    const resultDisplayArray = [];
    for(i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class = "text-warning>${arr[i]}</li>`);
    }

    return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray); 
