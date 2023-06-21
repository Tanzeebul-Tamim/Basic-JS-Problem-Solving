/* Problem - 3 : Here's a function called isLGSeven() which takes a number as an input and finds the difference between the input-value and 7. If the difference is less than 7, it will show the difference as an output. Otherwise, it will return a value as an output, which is double of the input value. */

function isLGSeven(num) {
    const difference = (num - 7);

    if (typeof num !== 'number') {
        return "Please enter a numeric value!"
    }

    else if (difference < 7) {
        return difference;
    }

    else {
        return num * 2;
    }
}