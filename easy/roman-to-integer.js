// iterate through the string
// check conditionals of each roman numeral
// if X or V are after I, subtract,
// or you can check IX and IV

var romanToInt = function (s = "IV") {
  let sum = 0;
  let rm = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    if (rm[s[i + 1]] && rm[s[i]] < rm[s[i + 1]]) {
      sum += rm[s[i + 1]] - rm[s[i]];
      i++;
    } else {
      sum += rm[s[i]];
    }
  }
  return sum;
};

romanToInt();
