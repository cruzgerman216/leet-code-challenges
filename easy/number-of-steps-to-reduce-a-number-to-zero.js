var numberOfSteps  = function(num = 14) {
    let count = 0;
    while(num != 0){
        if(num % 2){ 
            num -= 1;
        }else{
            num = num/2;
        }
        count++;
    }
    return count;
};

console.log(numberOfSteps())