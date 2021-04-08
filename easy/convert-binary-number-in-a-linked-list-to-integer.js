var getDecimalValue = function(head) {
    let binary = head.join("");
    return parseInt(binary,2)
};

console.log(getDecimalValue([1,0,1]))