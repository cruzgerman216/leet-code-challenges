var arrayStringsAreEqual = function(word1 = ["ab", "c"], word2 = ["a", "bc"]) {
    let str1 = "";
    let str2 = "";
    for(let i = 0; i < word1.length; i++){
        str1 += word1[i];
    }
    for(let i = 0; i < word2.length; i++){
        str2 += word2[i];
    }

    if(str1 == str2){
        return true;
    }else{
        return false;
    }
};