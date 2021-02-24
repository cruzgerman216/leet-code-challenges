var xorOperation = function(n = 5, start = 0) {
    let answer = 0; 
    for(let i = 0; i < n; i++){
        answer = answer ^ (start + 2*i)
    }
    return answer;
};

xorOperation();