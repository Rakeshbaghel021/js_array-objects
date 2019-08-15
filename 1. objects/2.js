// Using the different way of accessing and assigning a value to the object using `.` or `[]`
  var value={
  	          name:"Rakesh",
  	          city:"aligarh"
            }
value.height="170 cm";
value[12]   ="mango";
// 1. Define a variable named `user` and assign a blank object to it.

    var user={ }; 
// 2. Add a key of `user name` and a value of `Black Panther` to that object.
    user["user name"]=`Black Panther`;

// 3. Using `console.log` log the value of `user name` key from the user object.

  console.log(user["username"])
// 4. Add a key of the value of variable `batch` in the object with the value of 10.
// var myBatch={
// 	         batch:10
//             }
user.myBatch=10

// 5. Using the alert function alert the value of the key added above.
 
 alert(user.batch)

// 6. Add a key of `42` to the object with a value of `The answer to the meaning of life 🧸`.

user[42]=`The answer to the meaning of life 🧸`;

// 7. Using the function console.log log the value of the key `42`.

console.log(user[42]);

// 8. Add a key in your object with the value of the variable `city`. The value of the key should be `true`.

user.city=`true`;

// 9. Uisng console.log log the value of the key defined above.

console.log(user.city);

// 10. Can you define a key of `let or var` in any object? Reason.
The difference between them is that var is function scoped and let is block scoped. 