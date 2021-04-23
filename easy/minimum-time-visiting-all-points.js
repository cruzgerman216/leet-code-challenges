var minTimeToVisitAllPoints = function(points = [[1,1],[3,4],[-1,0]]) {
    let operations = 0;

    for(let i = 0; i < points.length; i++){
        let x,y;
        if(points[i+1]){
            if(Math.sign(points[i][0]) == Math.sign(points[i+1][0])){
                x = Math.abs(points[i][0] - points[i+1][0])
            }else{
                x = Math.abs(points[i][0]) + Math.abs(points[i+1][0]);
            }
            if(Math.sign(points[i][1]) == Math.sign(points[i+1][1])){
                y = Math.abs(points[i][1] - points[i+1][1])
            }else{
                y = Math.abs(points[i][1]) + Math.abs(points[i+1][1]);
            }
        
            let max = Math.max(x,y);
            operations += max
        }else{
            break;
        }
    }
    return operations

};

console.log(minTimeToVisitAllPoints())