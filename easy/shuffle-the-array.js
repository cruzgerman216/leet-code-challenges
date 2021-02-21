
var shuffle = function(nums = [2,5,1,3,4,7], n = 3) {
    // [x] divide the array in half 
    // [x] loop through half the length of the nums array 
    // [x] delcare an array variable and then push x1,y1 as iterate through both arrays
    // [X] return the array 
    second_half = nums.splice(n);
    first_half = nums;
    arr = [];
    for(let i=0; i<n;i++){
        arr.push(first_half[i]);
        arr.push(second_half[i]);
    }
    return arr;
};
console.log(shuffle());