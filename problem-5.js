/* Problem - 5 : Here is a function called gemsToDiamond() which takes 3 numeric values as input and the numeric value here represents the number of gems each of the 3 friends have. Each friend has a gem of different power and the power here represents the quantity of diamonds they can get by converting their each of the own gems. This function calculates the quantity of total diamonds three friends can get altogether from the conversion of the total quantity of their gems. Finally, if the grandtotal is larger than 2000, the function deducts 2000 from the grandtotal and returns the value as an output. Otherwise it shows the value of the grandtotal as an output. */

function gemsToDiamond(gem1, gem2, gem3) {
    const powerGem1 = 21;
    const powerGem2 = 32;
    const powerGem3 = 43;

    const diamondQuantity1 = gem1 * powerGem1; 
    const diamondQuantity2 = gem2 * powerGem2; 
    const diamondQuantity3 = gem3 * powerGem3;
    
    const totalDiamond = diamondQuantity1 + diamondQuantity2 + diamondQuantity3;

    if (typeof gem1 !== 'number' || typeof gem2 !== 'number' || typeof gem3 !== 'number') {
        return "Please enter three numeric values!"
    }

    else if (gem1 < 0 || gem2 < 0 || gem3 < 0) {
        return "Please enter three positive numeric values!"
    }

    else if (!Number.isInteger(gem1) == true || !Number.isInteger(gem2) == true || !Number.isInteger(gem3) == true) {
        return "Please enter three integer values!"
    }

    else if (totalDiamond > 1000 * 2) {
        return totalDiamond - 2000;
    }

    else {
        return totalDiamond;
    }
}
