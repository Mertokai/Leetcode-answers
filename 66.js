let digitss = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
var plusOne = function (digits) {
  let num = digits.toString();
  for (let i = 0; i <= digits.length; i++) {
    num = num.replace(",", "");
  }
  console.log(num);
  num = Number(num);
  console.log(num);
};
plusOne(digitss);
