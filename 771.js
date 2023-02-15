var numJewelsInStones = function (jewels, stones) {
  let counter = 0;
  for (let i = 0; i <= stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (jewels[j] == stones[i]) {
        counter++;
      }
    }
  }
  return counter;
};
// Runtime
// 66 ms
// Beats
// 70.89%
// Memory
// 42.7 MB
// Beats
// 28.91%
