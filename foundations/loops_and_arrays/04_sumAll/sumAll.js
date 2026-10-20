const sumAll = function(first_num, second_num) {

    if (first_num < 0 || second_num < 0) return "Error";
    if (!Number.isInteger(first_num) || !Number.isInteger(second_num)) return "Error";
    if (first_num > second_num) {
        const change = first_num;
        first_num = second_num
        second_num = change
    }

    let total_sum = 0
    for (i = first_num; i <= second_num; i++) {
        total_sum += i
    }

    return total_sum;
};

// Do not edit below this line
module.exports = sumAll;
