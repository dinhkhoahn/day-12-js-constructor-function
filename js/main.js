//Constructor Function Character
function Character(name, level, weapon, type) {
    this.name = name;
    this.level = level || 1;
    this.weapon = weapon;
    this.type = type;
    this.attack = function() {
        console.log("Fight!!")
        return this
    };
    this.changeWeapon = function() {
        this.weapon = "Fist"
        return this
    };
    this.sayHi = function() {
        console.log(`Hello, my name is ${this.name}`)
        return this
    };
}
let knight = new Character("Arthur", 3, "Sword", "knight")
knight.sayHi().attack().changeWeapon()
console.log(knight.weapon)


//Constructor Function Weapon
function Weapon(type, damage, speed, color, weight, height) {
    this.type = type;
    this.damage = damage || 50;
    this.speed = speed;
    this.color = color || "black";
    this.weight = weight;
    this.height = height;
}
let longbow = new Weapon("longbow", 200, 10, "grey", 2, 3)
console.log(longbow)











