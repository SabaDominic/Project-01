"use strict";
function makesandwich(item) {
    console.log('\nMaking your sandwich with:');
    item.forEach(element => console.log("- " + element));
    console.log('Enjoy your sandwich!\n');
}
makesandwich(['ham', 'cheese', 'lettuce']);
makesandwich(['turkey', 'bacon']);
makesandwich(['peanut', 'jelly']);
