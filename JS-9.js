function createSumFunction() {
   
    let sum = 0;

    return function(value) {
        sum += value;
        return sum;
    };
}

const sum = createSumFunction();

console.log(sum(7));
console.log(sum(10));
console.log(sum(15));