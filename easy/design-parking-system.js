var ParkingSystem = function(big = 0, medium = 0, small = 3) {
    this.big = big;
    this.medium = medium;
    this.small = small;
};


ParkingSystem.prototype.addCar = function(carType) {
    if(carType == 1 && this.big != 0){
        this.big -= 1;
        return true;
    }else if(carType == 2 && this.medium != 0){
        this.medium -= 1;
        return true;
    }else if(carType == 3 && this.small != 0){
        this.small -= 1;
        return true;
    }else{
        return false;
    }
};

p = new ParkingSystem();
console.log(p.addCar(3));