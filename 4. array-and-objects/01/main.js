
// 1.

myPenguin.favoriteFoods = ['frog', 'whale', 'fish'];

console.log(myPenguin);

//2.

console.log(myPenguin.favoriteFoods[1]);

//3.

var firstFavFood = (myPenguin.favoriteFoods[0]);

//4.

myPenguin.favoriteFoods.push("insect");

//5.

console.log(myPenguin.favoriteFoods.length);

//6.

myPenguin.favoriteFoods[3]="pineapples";

//7.

var lastFavFood = myPenguin.favoriteFoods.length - 1;
myPenguin[lastFavFood];

//8.

for (i = 0; i < myPenguin.favoriteFoods.length; i++) {
console.log(myPenguin.favoriteFoods[i]);
