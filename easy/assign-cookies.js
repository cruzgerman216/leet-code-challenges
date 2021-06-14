var findContentChildren = function (g = [10, 9, 8, 7], s = [5, 6, 7, 8]) {
  let i = 0;
  let childrenSatisfied = 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  for (let num of s) {
    if (num >= g[i]) {
      childrenSatisfied++;
      i++;
    }
  }
  return childrenSatisfied;
};
