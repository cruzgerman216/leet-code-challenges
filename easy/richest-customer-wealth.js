var maximumWealth = function(accounts = [[1,2,3],[3,2,1]]) {
    // [x] iterate through the array
    // [x] iterate through the element arrays
    // [x] declare a variable at 0 
    // [x] compare the sum of the iterated array to the decalred variable to which is greater
    // [x] return greatest number
    let greatest_number = 0;
    for(let i = 0; i < accounts.length; i++){
        let wealth = 0;
        for(let j = 0; j < accounts[i].length; j++){
            wealth += accounts[i][j];
        }
        if(wealth > greatest_number){
            greatest_number = wealth;
        }
    }
    return greatest_number;
};

console.log(maximumWealth())