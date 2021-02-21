var numIdenticalPairs = function(nums = [1,2,3,1,1,3]) {
    // [x] iterate through the array 
    // [x] declare a variable called good_times in function scope 
    // [x] add a second iteration to compare the array 
    // [x] if [i] == [j] add 1 to good_times
    // [x] return good times 
    let good_times = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(i != j && i < j && nums[i] == nums[j]){
                good_times += 1;
            }
        }
    }

    return good_times;
};

console.log(numIdenticalPairs());