/* Problem - 1 : Here's a function called mindGame() which takes a positive number as an input and then multiplies it by 3. After that it adds 10 with the previous product. Then the sum is divided by 2 and finally it deducts 5 from the previous quotient and shows the result as an output. */

function mindGame (posNum) {
    const step1 = posNum * 3;
    const step2 = step1 + 10;
    const step3 = step2 / 2;
    const final = step3 - 5;

    if (typeof posNum !== 'number') {
        return "Please enter a numeric value!"
    }

    else if (posNum < 0) {
        return "Please enter a positive value!"
    }

    else {
        return final;
    }    
}