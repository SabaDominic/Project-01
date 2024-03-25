// loop method
var userName = ['admin', 'bunny', 'duck', 'sylvester', 'twety'];
for (var i = 0; i < userName.length; i++) {
    if (userName[i] === 'admin') {
        console.log("hello admin, would you like to see a status report?");
    }
    else {
        console.log("hello ".concat(userName[i], ", thank you for logging in again."));
    }
}
//forEach method
var userNames = ['admin', 'bunny', 'duck', 'sylvester', 'twety'];
userNames.forEach(function (item) {
    if (item === 'admin') {
        console.log("hello admin, would you like to see a status report?");
    }
    else {
        console.log("hello ".concat(userName, ", thank you for logging in again."));
    }
});
