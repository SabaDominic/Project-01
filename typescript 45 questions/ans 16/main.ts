// name array
let guestarray:string[] = ["marry","julie","anna"];

// can not make dinner
let cannotattend = "anna";
// invite new guest
let newguest = "Aira";
guestarray[guestarray.indexOf(cannotattend)]=newguest;
//console.log(guestarray);

guestarray.unshift("christy");
//console.log(guestarray);

let middleguest = "gizel";
let middleindex = guestarray.length/2
guestarray.splice(middleindex, 0 , middleguest );

 //console.log(guestarray);

 guestarray.push("aima");
 console.log(guestarray);

console.log("we can invite only two peoples for dinner");

while(guestarray.length>2){
let removeguest = guestarray.pop();
console.log(`\n sorry ${removeguest} we can't invite you for diner`);
}

guestarray.map((item)=> console.log(`\n${item} you are still invited to dinner`));

guestarray.pop();
guestarray.pop();
console.log(guestarray);





