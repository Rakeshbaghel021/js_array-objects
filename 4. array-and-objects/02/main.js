
//1

var penguins = [gunter, ramon, fred];

//2.

console.log(penguins[0]);


//3.


var secondPenguin = penguins[1]; 

//4.

 console.log(penguins[2]);

//5.

penguins.push(myPenguin);

//6.

penguins.length;
console.log(penguins.length);

//7.

gunter.canFly = true;

//8.

gunter.sayHello();

//9.

for (i = 0; i < penguins.length; i++) {
console.log(penguins[i]);
}

//10.

for (i = 0; i < penguins.length; i++) {
penguins[i].sayHello(); 
}

//11.

for (i = 0; i < penguins.length; i++) {
penguins[i].numberofFeet = 2; 

//12.

for (i = 0; i < penguins.length; i++) {
       if (penguins[i].canFly === true) {
        console.log(penguins[i].name + ' can fly'); 
          } 
}
