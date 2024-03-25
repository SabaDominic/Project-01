let magician :string[] = ['harry potter' , 'hermione granger' , 'ron weasley' , 'albus dumbledore'];

function show_magician(magicians: string[]){

    magicians.forEach(element => {
         console.log(element);
    });
}

show_magician(magician);
