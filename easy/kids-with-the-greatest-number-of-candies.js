var kidsWithCandies = function(candies = [2,3,5,1,3], extraCandies = 3) {  
    // [x] loop through the array 
    // [x] add the current element with extra candies
    // [x] compare the entire array to see if the added candies makes the kid have the most candies
    // [x] if so, push true, if not, push false 
    // [x] return the array of booleans 
    
    let kids = [];
    for(let i=0; i<candies.length;i++){
        const addedcandies = candies[i] + extraCandies;
        let greatest = true;
        for(let j = 0; j<candies.length;j++){
            if(addedcandies < candies[j]){
                greatest = false;
                break;
            }
        }
        kids.push(greatest);
    }
    return kids;
};

console.log(kidsWithCandies())