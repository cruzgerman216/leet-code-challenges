var minTimeToVisitAllPoints = function(points = [[1,1],[3,4],[-1,0]]) {
    let xmin = 0, xmax = 0, ymin = 0, ymax = 0;

    for(let i = 0; i < points.length; i++){
        if(points[i][0] < xmin){
            xmin = points[i][0]
        }
        if(points[i][0] > xmax){
            xmax = points[i][0]
        }
        if(points[i][1] < ymin){
            ymin = points[i][1]
        }
        if(points[i][1] < ymax){
            ymax = points[i][]
        }
    }
    console.log(xmin,xmax,ymin,ymax);
};

minTimeToVisitAllPoints()