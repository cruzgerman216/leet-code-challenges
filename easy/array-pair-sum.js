// # Solution 1

// make keys for the index
// add pairs into the array 
// then loop again to find the minimum sum
var arrayPairSum = function(nums) {
    nums.sort((x, y) => x - y);
    let res = 0;
    for(let i = 0; i < nums.length; i += 2){
      res += nums[i];
    }
    return res;
  };