var removeElements = function (head, val) {
  if (!head) {
    return null;
  }
  for (let i = 0; i <= head.length; i++) {
    if (head[i] == val) {
      head.splice(i, 1);
    }
  }
  return head;
};

removeElements([1, 2, 6, 3, 4, 5, 6], 6);
