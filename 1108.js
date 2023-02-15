var defangIPaddr = function (address) {
  var result = [];
  for (let i = 0; i < address.length; i++) {
    if (address[i] == ".") {
      result.push("[.]");
    } else {
      result.push(address[i]);
    }
  }
  return result.join("");
};
//Runtime
//62 ms
//Beats
//72.47%
//Memory
//41.7 MB
//Beats
//61.69%
