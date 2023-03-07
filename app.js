class Aeroplane{
    static speed ="250km/hr";
    static  _capacity =30;
    constructor(capacity){
        Aeroplane._capacity =capacity;
    }
    static wheels(){
        console.log(`${Aeroplane._capacity} and runs ${this.speed}`);
    }
}
class FighterPlain extends Aeroplane{
    constructor(capacity){
        super(capacity)
    }
   
}


FighterPlain.wheels()


// class Aeroplane{
//     static speed = "250km/hr";
//     static  _capacity = 30;
//     constructor(capacity){
//         Aeroplane._capacity = capacity;
//     }
//     static wheels(){
//         console.log(`${Aeroplane._capacity} and runs ${Aeroplane.speed}`);
//     }
// }

// class FighterPlain extends Aeroplane{
//     constructor(capacity){
//         super(capacity);
//     }
// }

// FighterPlain.wheels(); // Output: "30 and runs 250km/hr"



class Animal {
    constructor(breath){
        this._breath =breath;
    }
   static moving(){
        console.log(`Moves from place to place`);
    }
}
class dog extends Animal{
    constructor(breath){
        super(breath)
    }
}
dog.moving()