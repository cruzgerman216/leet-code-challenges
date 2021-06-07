// Solution #1

// Iterate through one of the words
// keep track of the same count of the same letters in the same indexes
// once you reach a commonality, keep track fo that number and if it increases as you iterate,
// add those letters to a string
// if not, break
// if there is no commonality, return "";

var longestCommonPrefix = function (strs = ["a"]) {
  let str = "";
  let count = 0;

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] == strs[j][i]) {
        count++;
      }
    }
    if (count == strs.length-1) {
      str += strs[0][i];
    } else {
      break;
    }
    count = 0;
  }
  return str;
};

longestCommonPrefix();
