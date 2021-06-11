var addStrings = function (num1 = "11", num2 = "123") {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let sum = 0;
  let arr = [];
  while (i >= 0 || j >= 0 || carry == 1) {
    sum = (+num1[i] || 0) + (+num2[j] || 0) + carry;
    sum >= 10 ? (carry = 1) : (carry = 0);
    arr.unshift(sum % 10);
    i--;
    j--;
  }

  return arr.join("");
};

addStrings();
