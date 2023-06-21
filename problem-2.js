/* Problem - 2 : Here's a function called evenOdd() which takes a string as an input and shows 'even' or 'odd' as an output based on the number of the characters of the input string. */

function evenOdd(string) {
    if (string.length % 2 == 0 && typeof string == 'string') {
        return 'even';
    }

    else if (string.length % 2 !== 0 && typeof string == 'string') {
        return 'odd';
    }

    else if (typeof string !== 'string') {
        return 'Please enter a string!'
    }
}
