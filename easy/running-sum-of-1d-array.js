var runningSum = function(nums) {
    const arr = [];
    for(let i =0; i < nums.length; i++){
        sum = nums[i];
        for(let j = 0; j < i; j++){
               sum += nums[j]
        }
        arr.push(sum)
    }
    return arr;
};