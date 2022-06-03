const leapYears = function(year) {
    if (typeof(year) != "number"){
        return "ERROR";
    }
    else if (year < 0){
        return "ERROR";
    }

    return !(year % 4) ? (year % 100 || (!(year % 100) && !(year % 400)) ? true : false) : false;
};

// Do not edit below this line
module.exports = leapYears;
