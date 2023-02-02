var lengthOfLastWord = function (s) {
  const words = s.trim().split(" ");
  if (words.length > 0) {
    return words[words.length - 1].length;
  }
};
/*Leetcode 58. Length of Last Word Javascript
Runtime
55 ms
Beats
94.82%
Memory
41.9 MB
Beats
71.65%*/
