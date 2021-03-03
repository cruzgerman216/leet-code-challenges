var countConsistentStrings = function(allowed = "ab", words = ["ad","bd","aaab","baa","badab"]) {
    let count = 0;

    for(let i = 0; i < words.length; i++){
        let on = true;
        for(let j = 0; j < words[i].length; j++){
            if(allowed.indexOf(words[i][j]) == -1){
                on = false;
            }
        }
        if(on){
            count++;
        }
    }
    return count;
};

console.log(countConsistentStrings());