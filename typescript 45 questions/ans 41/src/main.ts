let magician:string[] = ['harry potter' , 'hermione granger' , 'ron wasley' , 'albus dumbledore'];

function make_great (magicianarray:string[]){

    for(let i=0; i<magicianarray.length; i++){
          magician[i] = 'The Great ' + magicianarray[i]
        }
}

function show_magician(magicians:string[]){

    magicians.forEach(element => {
        console.log(element);
    });
}

make_great(magician);
show_magician(magician);
