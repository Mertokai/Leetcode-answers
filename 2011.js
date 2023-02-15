var finalValueAfterOperations = function (operations) {
  let counter = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] == "++X" || operations[i] == "X++") {
      counter++;
    } else {
      counter--;
    }
  }
  return counter;
};

// Runtime
// 60 ms
// Beats
// 92.84%
// Memory
// 42.1 MB
// Beats
// 85.59%
