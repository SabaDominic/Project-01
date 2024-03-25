"use strict";
let magician = ['harry potter', 'hermione granger', 'ron wasley', 'albus dumbledore'];
function make_great(magicianarray) {
    for (let i = 0; i < magicianarray.length; i++) {
        magician[i] = 'The Great ' + magicianarray[i];
    }
}
function show_magician(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
make_great(magician);
show_magician(magician);
