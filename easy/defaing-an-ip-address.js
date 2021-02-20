var defangIPaddr = function(address = "1.1.1.1") {
    let str = "";
    for(let i = 0; i < address.length;i++){
        if(address[i] == "."){
            str += "[.]"
        }else{
            str += address[i]
        }
    }
    return str
};

console.log(defangIPaddr())