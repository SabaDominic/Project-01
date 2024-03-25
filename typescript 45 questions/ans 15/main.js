// name array
var guestarray = ["marry", "julie", "anna"];
// can not make dinner
var cannotattend = "anna";
// invite new guest
var newguest = "Aira";
guestarray[guestarray.indexOf(cannotattend)] = newguest;
//console.log(guestarray);
console.log("welcome all we found a bigger dinner table");
guestarray.unshift("christy");
//console.log(guestarray);
var middleguest = "gizel";
var middleindex = guestarray.length / 2;
guestarray.splice(middleindex, 0, middleguest);
//console.log(guestarray);
guestarray.push("aima");
//console.log(guestarray);
guestarray.map(function (item) { return console.log("\nDear ".concat(item, " you are invited for dinner")); });
