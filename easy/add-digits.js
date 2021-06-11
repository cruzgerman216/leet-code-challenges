// # Solution 1

// risk assessments/notes
// if the digit is already a single digit return number
// check to see if the parameter is a number

// constraints
// digit is an integer and always positive

// pseudocode
// Turn this into a string
// recursively
// check to see if single digit < 10 return single digit X
// loop through the string and then add each and everyone one
// set that to single digit
// if less than 10 return 0;
// else recursively go through it again

var addDigits = function (num=38) {
  let sum = 0;
  let str = num.toString();

  if (isNaN(num)) {
    return 0;
  }
  if (num < 10) {
    return num;
  }

  for (let i = 0; i < str.length; i++) {
    sum += +str[i];
  }

  if (sum < 10) {
    return sum;
  } else {
    sum = addDigits(sum);
  }
  return sum;
};

console.log(addDigits())