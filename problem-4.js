/* Problem - 4 : Here is a function called findingBadData() which takes an array as an input. The array will contain both positive & negative numbers (less than, greater than or equal to zero). If the number is negative, we'll call it a "Bad Data" & if it is positive, we'll call it a "Good Data". The function finds out the quantity of the Bad Data and return the value as an output */

function findingBadData(arr) {
  if (Array.isArray(arr) !== true) {
    return "Please enter an array!";
  } else {
    const badData = [];
    for (let i = 0; i < arr.length; i++) {
      let element = arr[i];
      if (element < 0) {
         badData.push (element);
      }
    }
    return badData.length;
  }
}
