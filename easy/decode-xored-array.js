var decode = function(encoded = [1,2,3], first = 1) {
    const arr = [first]
    for(let i = 0; i < encoded.length; i++){
        arr.push(arr[i] ^ encoded[i])
    }
    return arr;
};

console.log(decode())