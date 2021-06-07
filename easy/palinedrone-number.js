// turn number into string
// iterate through the array
// compare the first element to the last element and so on --> <--

var isPalindrome = function (x) {
  const str = x.toString();
  let on = true;
  for (let i = 0; i < str.length; i++) {
    if (str[str.length - i - 1] != str[i]) {
      on = false;
    }
  }
  return on;
};

console.log(isPalindrome(-343));
