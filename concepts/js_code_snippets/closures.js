function outer() {
    let x = 0;
    
    function inner() {
        x++
        console.log(x);
    }

    return {inner}
}

const counter = outer();

counter.inner();
counter.inner();
counter.inner();






