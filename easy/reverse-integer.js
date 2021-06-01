var reverse = function (x = 1534236469) {
  const num = parseInt(x.toString().split("").reverse().join(""));
  if (num > 0x7fffffff) {
    return 0;
  }
  if (Math.sign(x) == -1) {
    return num * -1;
  }
  return num;
};

console.log(reverse());

console.log(sdf);
