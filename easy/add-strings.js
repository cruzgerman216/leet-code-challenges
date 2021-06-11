var arrangeCoins = function (n = 8) {
  let staircases = 0;
  let coins = n;

  for (let i = 0; i < n; i++) {
    staircases++;
    coins -= staircases;
    if(staircases >= coins){
        break;
    }
  }
  return staircases;
};

arrangeCoins();
