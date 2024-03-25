// name array
let guestarray:string[] = ["marry","julie","anna"];

// can not make dinner
let cannotattend = "anna";
// invite new guest
let newguest = "Aira";
guestarray[guestarray.indexOf(cannotattend)]=newguest;
//console.log(guestarray);

console.log("welcome all we found a bigger dinner table");

guestarray.unshift("christy");
//console.log(guestarray);

let middleguest = "gizel";
let middleindex = guestarray.length/2
guestarray.splice(middleindex, 0 , middleguest );

 //console.log(guestarray);

 guestarray.push("aima");
 //console.log(guestarray);

guestarray.map((item)=> console.log(`\nDear ${item} you are invited for dinner`));

