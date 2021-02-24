var createTargetArray = function(nums = [0,1,2,3,4], index = [0,1,2,2,1]) {
    const arr = [];
    for(let i = 0; i < index.length; i++){
        arr.splice(index[i], 0, nums[i])
    }
    return arr;
};

createTargetArray();