// arr = positive numbers
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

function twoSum(numbers, target) {
    let numDict = {}
    for (let i = 0; i < numbers.length; i++) {
      let targetDiff = target - numbers[i]
      if (numDict[targetDiff] || numDict[targetDiff] == 0) {
        return [numDict[targetDiff], i]
      }
      numDict[numbers[i]] = i
    }
    console.log(numDict)
  }