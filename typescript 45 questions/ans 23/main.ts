// equality and inequqlity test 
console.log("equality test with string: ", "apple" === "apple");
// equality and inequqlity test 
console.log("inequality test with string: ", ("apple" as string) != "orange");

// Test using the lowercase function 
console.log("lower case function test: " , "HELLO".toLowerCase() === "hello");

// numerical test involving equality 
console.log("equality test with numbers: " , 25 === 25);
// numerical test involving  inequality 
console.log("inequality test with numbers: " , (25 as number) != 26);

//greater than test
console.log("greater than test: ", 10 > 5);
//less than test
console.log("less than test: ", 10 < 12);

// greater than or equal to
console.log("greater than and equal to test: ", 10 >= 10);
//less than or equal to
console.log("less than and equal to test: ", 5 <= 10);
 
//test using "and" operator
console.log("and operator test: ", 5===5 && 10 > 5 );
 //test using "or" operator
 console.log("or opertor test: ", 5===5 || false);
  
 //test whether an item is in a array
 const fruits :string[] = ['mango', 'banana', 'strawberry'];
 console.log('test "mango" in the array: ', fruits.includes("mango"));

 //test whether an item is not in a array
 console.log('testing "apple" is not in array: ', !fruits.includes("apple"));



 






