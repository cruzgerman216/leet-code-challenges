var toLowerCase = function(str = "Hello") {
    let str2 = "";

    for(let i = 0; i < str.length; i++){
        str2 += str[i].toLowerCase();
    }

    return str2;
};

console.log(toLowerCase())