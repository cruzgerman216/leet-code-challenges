var arraySign = function(nums = [-1,1,-1,1,-1]) {
    // let product = 1;
    if(nums.includes(0)){
        return 0;
    }

    // for(const num of nums){
    //     product *= Math.sign(num)
    // }

    // return product;

    let arr = nums.filter(x => Math.sign(x) == -1);
    if(arr.length %2){
        return -1
    }else{
        return 1;
    }
};

console.log(arraySign())