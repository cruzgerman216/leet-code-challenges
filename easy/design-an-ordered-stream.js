var OrderedStream = function(n) {
    this.length = n;
    this.arr = [];
};

OrderedStream.prototype.insert = function(idKey, value) {
    let key = idKey - 1;
    let arr = [];
    let empty = -1;
    let on = false;
    for(let i = 0; i < this.length; i++){
        if(typeof this.arr[i] === 'undefined'){
            if(on){
                break;
            }
            if(empty == -1){
                empty = i;
            }
            if(key == i){
                on = true;
                this.arr[key] = value;
                arr.push(value);
            }
        }else if(i > key){
            arr.push(this.arr[i])
        }
    }
    if(empty != key){
        return [];
    }else{
        return arr;
    }
};

var obj = new OrderedStream(5)
var param_1 = obj.insert(3,"ccccc")
var param_2 = obj.insert(1,"aaaaa")
var param_3 = obj.insert(2,"bbbbb")
var param_4 = obj.insert(5,"eeeee")
var param_5 = obj.insert(4,"ddddd")


console.log(param_1)
console.log(param_2)
console.log(param_3)
console.log(param_4)
console.log(param_5)

