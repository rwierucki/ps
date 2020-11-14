// function scope //

function startCar(carId) {
    let message1 = 'starting ... 1';
    let message2 = 'starting ... 2';
    let startFn = function turnKey() {
        let message1 = 'Override1';
        message2 = 'Override2';
    };
    startFn();
    console.log(message1);
    console.log(message2);

}
startCar(123);

// block scope //
let message3 = '3333';
if (5 === 5) {
    let message3 = '5 = 5';
    console.log(message3);
}
console.log(message3);

var message4 = '4444';
if (5 === 5) {
    var message4 = '5 = 5';
    console.log(message4);
}
console.log(message4);

// IIFE's //
console.log("IIFE's");
// ()();
// (function() { })();
(function(){
    console.log('in function');
})();

let app = (function(){
    let id = 123;
    console.log('in function');
    return id;
    // return {};
})();
console.log(app);


let app2 = (function(){
    let id = 123;
    let getId = function(){
        return id;
    }
    return {
        getId: getId
    };
})();
console.log(app2.getId());

// the this keyword //
console.log("the this keyword");
let fn = function() {
    console.log(this === window);
};
fn();

// obj
let obj1 = {
    objId: 987,
    getId: function() {
        console.log(this); // object
        return this.objId;

    }


};
console.log(obj1.getId());

// call + apply //
function Product(name, price) {
    this.name = name;
    this.price = price;
  }

  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }

  function Toy(name, price) {
    Product.call(this, name, price);
    this.category = 'toy';
  }

  const cheese = new Food('feta', 5);
  const fun = new Toy('robot', 40);

// apply ??
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2


// arrow fun
let getId01 = () =>  '01';
let getId02 = _ =>  '02';
let getId1 = (prefix, suffix) => {
    return prefix + 555 + suffix;
};
let getId2 = (prefix, suffix) => prefix + 444 + suffix;
console.log(getId01());
console.log(getId02());
console.log(getId1('ID: ', '!'));
console.log(getId2('ID: ', '!'));




