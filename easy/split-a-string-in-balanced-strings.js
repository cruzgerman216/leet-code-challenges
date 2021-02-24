//  loop therough the array and check to see if a given R count can reach a given L count 
// RLLR RL LR 2
// RRLRLLRL RRLRLL  RL 2

var balancedStringSplit = function( s = "RLRRLLRLRL") {
    let count = 0;
    let r = 0;
    let l = 0;
    for(let i = 0; i < s.length; i ++){
        if(s[i] == 'R'){
            r += 1;
        }else if(s[i] == 'L'){
            l +=1
        }
        if(r == l){
            count++;
            r = 0;
            l = 0;
        }
    }
    return count;
};

balancedStringSplit();