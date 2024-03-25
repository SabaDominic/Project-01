// loop method
const userName: string[] = ['admin','bunny','duck','sylvester','twety'];

for(let i=0; i<userName.length; i++){

    if(userName[i] === 'admin'){
        console.log("hello admin, would you like to see a status report?");
    }
    else{
        console.log(`hello ${userName[i]}, thank you for logging in again.`)
    }
}

//forEach method
const userNames: string[] = ['admin','bunny','duck','sylvester','twety'];

userNames.forEach(item => {

    if(item === 'admin')
    {
        console.log("hello admin, would you like to see a status report?");
    }
    else{
        console.log(`hello ${userNames}, thank you for logging in again.`)
    }
})