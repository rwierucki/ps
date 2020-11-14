// constructor functions //
function Car(id) {
    this.carId = id;
}
// prototype - zapobiegania tworzeniu wielu kopi tej samej funkcji
Car.prototype.start = function() {
    console.log('start : ' + this.carId);
};
let vehivle = new Car(123);
vehivle.start();

/////////////////
// JSON //
let jsonIn = `
 [
     {"carId" : 123},
     {"carId" : 456},
     {"carId" : 789}
 ]
`;
let carIdsParse = JSON.parse(jsonIn);
console.log(jsonIn);
console.log(carIdsParse);
console.log(JSON.stringify(carIdsParse));

// array iteration //

let carIds1 =  [
     {"carId" : 123, style: 'sedan'},
     {"carId" : 456, style: 'van'},
     {"carId" : 789, style: 'cabrio'}
 ];

 let carIds2 =  [
    {"carId" : 123, style: 'sedan'},
    {"carId" : null, style: 'van'},
    {"carId" : 789, style: 'cabrio'},
    {"carId" : 159, style: 'van'}
];
// forEach //
carIds1.forEach(element => {
    console.log(element);
});
carIds1.forEach((element, index) => {
    console.log(element, index);
});
// filrer //
let carsCabrio = carIds1.filter(element => element.style === 'cabrio');
console.log(carsCabrio);

//every // czy wszystkie elementy spełniają jakiś warunek np. carId większe od 0 //
let resultEvery1 = carIds1.every(car => car.carId > 0 );
console.log(resultEvery1);
//every // czy wszystkie elementy spełniają jakiś warunek np. carId większe od 0 //
let resultEvery2 = carIds2.every(car => car.carId > 0 );
console.log(resultEvery2);

// find // locate the FIRST match
let resultFind1 = carIds2.find(element => element.carId > 500);
console.log(resultFind1);
let resultFind2 = carIds2.find(element => element.style === 'van');
console.log(resultFind2);
 
