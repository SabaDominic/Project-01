
let magician:string[] = ['harry potter' , 'hermione granger' , 'ron wasley' , 'albus dumbledore'];

function copyarray(arr :string []){
    return [...arr]
}

function make_great(magicianarray:string[]){

    for(let i=0; i<magicianarray.length; i++){
        magicianarray[i] = 'The Great ' + magicianarray[i]
    }
}
function show_magician(magicians:string[]){

    magicians.forEach(element => {
        console.log(element);
    });
}

const copymagicianarray =  copyarray(magician);
make_great(copymagicianarray);

console.log('\n\nThis is my original array:');
show_magician(magician);

console.log('\n\nThis is my modified copy of the array:');
show_magician(copymagicianarray);
