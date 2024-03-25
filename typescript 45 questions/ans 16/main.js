// name array
var guestarray = ["marry", "julie", "anna"];
// can not make dinner
var cannotattend = "anna";
// invite new guest
var newguest = "Aira";
guestarray[guestarray.indexOf(cannotattend)] = newguest;
//console.log(guestarray);
guestarray.unshift("christy");
//console.log(guestarray);
var middleguest = "gizel";
var middleindex = guestarray.length / 2;
guestarray.splice(middleindex, 0, middleguest);
//console.log(guestarray);
guestarray.push("aima");
console.log(guestarray);
console.log("we can invite only two peoples for dinner");
while (guestarray.length > 2) {
    var removeguest = guestarray.pop();
    console.log("\n sorry ".concat(removeguest, " we can't invite you for diner"));
}
guestarray.map(function (item) { return console.log("\n".concat(item, " you are still invited to dinner")); });
guestarray.pop();
guestarray.pop();
console.log(guestarray);
