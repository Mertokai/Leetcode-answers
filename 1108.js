var defangIPaddr = function (address) {
  var result = [];
  for (let i = 0; i < address.length; i++) {
    if (address[i] == ".") {
      result.push("[.]");
    } else {
      result.push(address[i]);
    }
  }
  console.log(result.join(""));
};
defangIPaddr("1.1.1.1");
