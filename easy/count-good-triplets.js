var countGoodTriplets = function(arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3) {
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            for(let k = j+1; k < arr.length; k++){
                if(arr[i] - arr[j] <= a && arr[j] - arr[k] <= b && arr[i] - arr[k] <= c){
                    console.log("test")
                }
            }
        }
    }
};