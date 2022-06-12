const fibonacci = function(num) {
    if (num <= 0) {
        return "OOPS";
    }
    else if (num == 1) {
        return 1;
    }
    else {
        let prevVal = 1;
        let currVal = 1;
        let tempVal = currVal;
        for (let i = 0; i < num - 2; i ++){
            tempVal = currVal;
            currVal = currVal + prevVal;
            prevVal = tempVal;
        }
        return currVal;
    }
};

// Do not edit below this line
module.exports = fibonacci;
