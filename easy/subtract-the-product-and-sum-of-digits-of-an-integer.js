var subtractProductAndSum = function(n = 234) {
    let number = n.toString();
    let product = 1;
    let sum = 0;
    for(let i = 0; i < number.length; i++){
        let num = number[i];
        product *= num;
        console.log(product)
        sum += +num;
    }
    return product - sum;
};

console.log(subtractProductAndSum());