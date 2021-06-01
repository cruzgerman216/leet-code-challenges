// arr = positive nums
// goal: any two values of the indexes to add up to target
// return value will be any two indexes

function twoSum(arr=[1,2,3], target = 4){
    // loop through arr
    // second loop to iterate through arr again
    // get the first loop incremental index value and sum that to the second loop incremental index value
    for(let i = 0; i < arr.length-1; i++){
        for(let j = i+1; j < arr.length; j++){
            let sum = arr[i] + arr[j];
            if(sum == target){
                return [i,j]
            }    
        }
    }
}

function twoSum(nums, target) {
    let numDict = {}
    for (let i = 0; i < nums.length; i++) {
      let targetDiff = target - nums[i]
      if (numDict[targetDiff] || numDict[targetDiff] == 0) {
        return [numDict[targetDiff], i]
      }
      numDict[nums[i]] = i
    }
  }

  const twoSum = (nums, target) => {
    const map = {};
  
    for (let i = 0; i < nums.length; i++) {
      const another = target - nums[i];
  
      if (another in map) {
        return [map[another], i];
      }
  
      map[nums[i]] = i;
    }
  
    return null;
  };