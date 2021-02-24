var decompressRLElist = function(nums = [1,1,2,3]) {
    let arr = [];

    for(let i = 0; i < nums.length; i = i +2){
        for(let j = 0; j < nums[i]; j++){
            arr.push(nums[i+1])
        }
    }
    return arr;
};
