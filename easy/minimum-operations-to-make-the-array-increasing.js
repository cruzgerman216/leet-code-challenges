var minOperations = function(nums = [1,1,1]) {
    let operations = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i+1] && nums[i] >= nums[i+1]){
            let difference = 0;
            difference = 1 + nums[i] - nums[i+1];
            nums[i+1] = difference + nums[i+1];
            operations += difference;
        }
    }
    return operations;
};


console.log(minOperations())
