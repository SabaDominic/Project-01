var current_users = ['TaHa', 'DaNiyal', 'SalMan', 'Hamzah', 'John'];
var new_users = ['Bilal', 'TaHa', 'Dawood', 'Jameel', 'Hamzah'];
new_users.forEach(function (newusername) {
    var lowercase = newusername.toLowerCase();
    if (current_users.map(function (c_user) { return c_user.toLowerCase(); }).includes(lowercase)) {
        console.log("The username ".concat(newusername, " is not available. please write diferent usename"));
    }
    else {
        console.log("The username ".concat(newusername, " is available."));
    }
});
