var maxDepth = function(s = "(1+(2*3)+()(/84))+1") {
    let depth = 0;
    let count = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === "("){
            count++;
            depth = Math.max(depth, count);
        }
        if(s[i] === ")"){
            count--;
        }
    }

    return depth;

};

console.log(maxDepth())