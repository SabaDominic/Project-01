// name array
let guestarray:string[] = ["marry","julie","anna"];

// can not make dinner
let cannotattend = "anna";
console.log(`${cannotattend} can not make it ,for dinner`);

// invite new guest
let newguest = "Aira";
guestarray[guestarray.indexOf(cannotattend)]=newguest;
console.log(guestarray);
   
// send message
guestarray.map((item)=> console.log(`hello, ${item} you are invited for dinner`));


