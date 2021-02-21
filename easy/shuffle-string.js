var restoreString = function( s = "codeleet", indices = [4,5,6,7,0,2,1,3]) {
    const arr = [];
    for(let i = 0; i < indices.length; i++){
        arr[indices[i]] = s[i]
    }
    return arr.join().replace(/,/g,"");
};

console.log(restoreString())