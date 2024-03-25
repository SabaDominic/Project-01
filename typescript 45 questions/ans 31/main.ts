let current_users: string[] = ['TaHa','DaNiyal','SalMan','Hamzah','John'];

let new_users: string[] = ['Bilal','TaHa','Dawood','Jameel','Hamzah'];

new_users.forEach(newusername => {
    let lowercase: string = newusername.toLowerCase();

    if(current_users.map(c_user => c_user.toLowerCase()).includes(lowercase)) {
        console.log(`The username ${newusername} is not available. please write diferent usename`);
    }
    else{
        console.log(`The username ${newusername} is available.`);
    }
})
