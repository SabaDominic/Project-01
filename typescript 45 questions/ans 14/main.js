// name array
var guestarray = ["marry", "julie", "anna"];
// can not make dinner
var cannotattend = "anna";
console.log("".concat(cannotattend, " can not make it ,for dinner"));
// invite new guest
var newguest = "Aira";
guestarray[guestarray.indexOf(cannotattend)] = newguest;
console.log(guestarray);
// send message
guestarray.map(function (item) { return console.log("hello, ".concat(item, " you are invited for dinner")); });
