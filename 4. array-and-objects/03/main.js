
//1.

myPenguin.outfit = {
   hat:"hawaiian",
   shirt:"polo",
   pants:"cargo",
   shoes:"loafers"
 };

//2.


var penguinHatType = myPenguin.outfit.hat;

//3.


myPenguin.outfit.access = 'pocket watch';

//4.


myPenguin.outfit.hat='top hat';

//5.


delete myPenguin.outfit.pants;

//6.

for (var eachvalue in myPenguin.outfit) {
  console.log(myPenguin.outfit[eachvalue]);
}