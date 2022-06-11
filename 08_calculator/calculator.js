const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const sum = function(array) {
    return array.reduce((accumulator, currVal) => accumulator + currVal, 0)
};

const multiply = function(array) {
    return array.length ? 
        array.reduce((accumulator, currVal) => accumulator * currVal)
        : 0;
};

const power = function(a, b) {
    return a ** b 
};

const factorial = function(fact) {
    if (fact == 0){
        return 1;
    }
    else {
        let product = fact;
        for (let i = fact - 1; i > 0; i --){
            product *= i;
        }
        return product;
    }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
