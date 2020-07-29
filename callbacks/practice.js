/* 
  Once you complete a problem, refresh ./SpecRunner.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.

  In this repo your job is to write functions to make each function call work properly.

  Here's an example of code that will be given to you:

  sayHi('Hi Katie', function(thingToSay){
    alert(thingToSay);
  });

  It would be your job to create the sayHi function:

  var sayHi = function(str, cb){
    cb(str);
  }
*/

////////// PROBLEM 1 //////////

/*
  Write a function EXPRESSION called first that takes in two parameters, an array and a callback function.
  Then invoke the callback function, passing in the first element in the array as it's argument.
*/

var first = function (array, callback) {
  return callback(array[0]); //Invoke the callback function passing in the first element in the array as it's argument
}

// Do not edit the code below.
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

first(names, function(firstName){
  console.log('The first name in names is ' + firstName);
  return firstName;
});
// Do not edit the code above.


////////// PROBLEM 2 //////////

/*
  Write AN ARROW function called last that takes in an array and a callback function. 
  Then invoke the callback, passing in the last element in the array as the argument.
*/

var last = (array, callback) => {
  return callback(array.pop())
}

// Do not edit the code below.
last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
  return lastName;
});
// Do not edit the code above.



////////// PROBLEM 3 //////////

/*
  Write a function DECLARATION called multiply that takes in three parameters: two numbers and a callback function.  
  Invoke the callback, passing in the product of the two numbers multiplied as the argument. 
*/
function multiply(width, height, callback) {
  return callback (width * height);
}

// Do not edit the code below.
multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
});
// Do not edit the code above.



////////// PROBLEM 4 //////////

/*
  Write a function called contains that takes in three parameters: an array, a name and a callback.  
  Check if the name exists in the array. 
  If it does, invoke the callback with true as the argument. 
  If the name does not exist, invoke the callback with false as the argument.
*/

var contains = (array, name, callback) => {
  if(name === array[0]) {
    return callback(true);
  }
  else {
    return callback(false);
  }
}


// Do not edit the code below.
contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});
// Do not edit the code above.



////////// PROBLEM 5 //////////

/*
  Write a function called uniq that takes in an array and a callback function.
  Remove any duplicate values from the array, and invoke the callback with the modified array as an argument.
*/

function uniq (array, callback){
    //validats whether the first occurence of the current item is in the array
var duplicate = array.filter(function(item, pos){
    //sets it equal to the current positions of the item (only returning those items)
return array.indexOf(item) == pos;
});
    //wrap the result and pass into a callback function 
callback(duplicate);
}
// Example 1
// function myFunction(myArray, callBack){

//   var unique = myArray.filter(function(item, pos) {
//     //validates whether the first occurrence of current item in array
//     // equals the current position of the item (only return those items) 
//     return myArray.indexOf(item) == pos;
//   });
 
//   //wrap your result and pass to callBack function 
//   callBack(unique);
 
//  }

// Do not edit the code below.
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});
// Do not edit the code above.



////////// PROBLEM 6 //////////

/* 
  Write a function called each that takes in an array of names and a callback function. 
  For each name in the array, invoke the callback and pass in the name and the name's index as arguments.
*/
var each = (array, callback) => {
   return callback((array[0]), array.indexOf(each));
}


 // var each = (names, callback) => {
// //   return callback(names.forEach(element => console.log(names, names.indexOf(element))));

// }
  
//   // (callback(array[0], array.indexOf(each)));
// }
// // callback(array.forEach(each(array[0])));

// callback(array.forEach(indexOf(array)));


/**
 * /* EXAMPLES forEach() and indexof()
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(array1.indexOf(element)));

// expected output: "a"
// expected output: "b"
// expected output: "c"


const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1

// Do not edit the code below.
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});

 */

// Do not edit the code below.
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});
// Do not edit the code above.



////////// PROBLEM 7 //////////

/*
  Write a function called getUserById that takes in three parameters: an array of objects (users), an id and a callback, and searches 
  for the user with a matching id.
  When the correct user object is found, invoke the callback with the user object as an argument.
*/

var getUserById = function (users, id, callback){
  return callback(users, id )
}

// Do not edit the code below.
var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});
// Do not edit the code above.