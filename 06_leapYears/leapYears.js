const leapYears = function(year) {
    if (typeof(year) != "number"){
        return "ERROR";
    }
    else if (year < 0){
        return "ERROR";
    }

    if (!(year % 4)) {
        if (year % 100) {
            return true;
        }
        else if (year % 400) {
            return false;
        }
        else {
            return true;
        }
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
