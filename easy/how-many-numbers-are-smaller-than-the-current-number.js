var smallerNumbersThanCurrent = function(nums = [8,1,2,2,3]) {
    const arr = []
    for(let i = 0; i < nums.length; i++){
        let count = 0;
        for(let j = 0; j < nums.length; j++){
            if(i != j && nums[j] < nums[i]){
                count += 1;
            }
        }
        arr.push(count);
    }
    return arr;
};

console.log(smallerNumbersThanCurrent());