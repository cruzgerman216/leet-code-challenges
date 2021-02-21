
var ParkingSystem = function(big = 1, medium = 1, small = 0) {
    this.big = big;
    this.medium = medium;
    this.small = smal;;
};


ParkingSystem.prototype.addCar = function(carType) {
    if(carType == '1' && this.big != 0){
        this.big -= 1;
        return true;
    }else{
        false;
    }
    if(carType == '2' && this.medium != 0){
        this.medium -= 1;
        return true;
    }else{
        false;
    }
    if(carType == '3' && this.small != 0){
        this.small -= 1;
        return true;
    }else{
        false;
    }
};