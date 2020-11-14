// rest parameters //
function sendCars(day, ...allCarIds) {
    allCarIds.forEach( id => console.log(id));

}
sendCars('monday',100, 'boo');

console.log(' | next |');


sendCars(100,200,300,400,500);

// typeof() //
typeof(1); // number
typeof(true); // boolean
typeof('Hello'); // strin
typeof( function(){}); // function
typeof({}); // object
typeof(null); // object !!!
typeof(undefined); // undefined
typeof(NaN); // number !!

// common type conversions //
console.log(' | common type conversions  |');
// convert to string
let example1 = 12345;
example1.toString();
console.log(typeof(example1));
// convert string to integer
example1 = '12345';
console.log(typeof(example1));
console.log(Number.parseInt(example1));
console.log(Number.parseInt('55')); // 55
console.log(Number.parseInt('55abc')); // 55
console.log(Number.parseInt('abc55abc')); //  NaN
console.log(Number.parseFloat(example1));
console.log(Number.parseFloat('55.99')); // 55.99
console.log(Number.parseFloat('55.99abc')); // 55.99
console.log(Number.parseFloat('abc55.99abc')); // NaN

// Controling Loops //
console.log(' | Controling Loops  |');
console.log(' for 1');

let iter1 = 0;
for(; iter1<10; iter1++) {
    console.log(iter1);
    if (iter1 === 5) {
        break;
    }
}
console.log(iter1);

console.log(' for 2');

for (let iter2 = 0; iter2 < 10; iter2++) {
    if (iter2 === 5) {
        continue;
    }
    console.log(iter2);
}


//
console.log( (5 > 4) ? 'yes' : 'no');
console.log( (5 > 41) ? 'yes' : 'no');
