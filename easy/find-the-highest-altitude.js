var largestAltitude = function(gain = [-5,1,5,0,-7]) {
    let altitude = 0;
    let travel = 0;
    for(let i = 0; i < gain.length; i++){
        travel += gain[i];
        if(altitude < travel){
            altitude = travel;
        }
    }

    return altitude;
};

console.log(largestAltitude())