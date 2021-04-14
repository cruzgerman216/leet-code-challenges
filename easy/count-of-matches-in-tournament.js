var numberOfMatches = function(n) {
    let teams;
    let total = 0;
    if(n == 1){
        return 0;
    }else if(n % 2 == 1){
        teams = (n-1) / 2;
        total += teams;
        total += numberOfMatches(teams+1);
    }else{
        teams = n / 2;
        total += teams;
        total += numberOfMatches(teams);
    }
    return total;
};