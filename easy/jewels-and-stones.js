var numJewelsInStones = function(jewels = "aA", stones = "aAAbbbb") {
    // [x] iterate through the stones string
    // [x] compare each stone with the jewels 
    // [x] add these to a function scope variable called mystones; 
    mystones = 0;
    for(let i = 0; i < stones.length; i++){
        for(let j = 0; j < jewels.length; j++){
            if(jewels[j] == stones[i]){
                mystones += 1;
            }
        }
    }
    return mystones;
};

console.log(numJewelsInStones())