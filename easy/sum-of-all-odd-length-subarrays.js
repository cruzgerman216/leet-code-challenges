var sumOddLengthSubarrays = function(arr) {
    let total = 0;
    const length = arr.length; 
    let i = 0;
    let odd = [];
    while(length+1 > i){
        if(i % 2){
            odd.push(i);
        }
        i++;
    }

    // loop through odd numbers
    for(let i = 0; i < odd.length; i++){
        if(odd[i] == 1 || odd[i] == arr.length){
            for(let j = 0; j < arr.length; j++){
                total += arr[j];
            }
        }else{
            let on = true;
            let j = 0;
            while(on){
                let amount = 0;
                for(let n=0; n < odd[i]; n++){
                    if(arr[n+j]){
                         amount += arr[n+j];
                    }else{
                        on = false;
                        amount = 0;
                    }
                }
                total += amount;
                j++;
            }
        }
    }
    return total;
};


sumOddLengthSubarrays([1,4,2,5,3]);
sumOddLengthSubarrays([1,2]);
sumOddLengthSubarrays([10,11,12]);
sumOddLengthSubarrays([7,6,8,6]); // 68


