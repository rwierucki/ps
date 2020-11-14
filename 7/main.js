// class basics //

import { CarModule } from "./models/car_module";

// class //
class Car1 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
let car1 = new Car1(123, 'Ford');
console.log(car1.id);
console.log(car1);

// methods //
class Car2 {
    constructor(id, name) {
        this.id = id;
    }
    identify(suffix){
        return `Car id: ${this.id} ${suffix}`;
    }
}
let car2 = new Car2(123);
console.log(car2.id);
console.log(car2.identify("!"));

// inheritance // dziedziczenie //
class Vehicle {
    constructor() {
        this.type = 'car';
    }
    start() {
        return `Starting Vehicke type: ${this.type}`;
    }
}
class Car3 extends Vehicle {
    // constructor(){
    //     // jeśli w kladzie nadrzednej jest konstrutkor to trzeba uzyc metody super() aby było można utworzyć konstruktor
    //     super();
    // }
    start() {

        return 'start car3 ||| ' + super.start();
    }
    start2() {
        return 'start2 car3';
    }

}
let car3 = new Car3();
console.log(car3.type);
console.log(car3.start());
console.log(car3.start2());

//  module //
import { CarModule } from './models/car_module.js';
let newCar = new CarModule(123);
console.log(car.id);









