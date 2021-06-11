// #solution 1

// avoid O(n^2) space complexity and time complexity
// O(n) time complexity
// iterate with conditions of both strings from last to beginning
// if the sum of two positions is 2, then carry 1 over to the next
// check if an index is less than 0, if so then carry onto the rest of the string
// javascript method or iterate and add the rest of the string that's left over
// if positions i = 0 and j = 0 and carry = 1
var addBinary = function (a = "0", b = "0") {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let num1, num2;
  let binaryString = [];
  let sum = 0;
  while (i >= 0 || j >= 0 || carry == 1) {
    // check if more than 2 and if both numbesrs exist
    // true -> carry = 1 have the sum module by 2
    // false -> add the sum
    a[i] ? (num1 = +a[i]) : (num1 = 0);
    b[j] ? (num2 = +b[j]) : (num2 = 0);
    sum = num1 + num2 + carry;
    binaryString.unshift(sum % 2);
    sum >= 2 ? (carry = 1) : (carry = 0);
    i--;
    j--;
    sum = 0;
  }

  return binaryString.join("");
};

console.log(addBinary());
