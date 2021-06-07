// Solution 1

// Iterate through the array
// compare current value and next value
// see if both values combine as a 2 bit character
// or a 1 bit character until the last character
// return true if last character is 1 bit
// or false if otherwise
var isOneBitCharacter = function (bits = [1,0, 1, 0, 1, 0,1,0,0]) {
  let obj = {
    11: 1,
    10: 1,
  };
  let on = false;
  bits = bits.join("");
  for (let i = 0; i < bits.length; i++) {
      if(bits[i+1] && obj[bits[i] + bits[i+1]]){
          if(i+1 == bits.length){
              break;
          }
          i++;
      }else{
          if(i == bits.length-1 && bits[i] == "0"){
              on = true;
          }
      }
  }
  return on;
};

isOneBitCharacter();
