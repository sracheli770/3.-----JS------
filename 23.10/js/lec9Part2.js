//class for shopping item
class ShoppingItem {
    name;
    amount;

    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
    }
}

//const shoppingList = [new ShoppingItem('Bamba', 2), new ShoppingItem('keyboard', 1)];

const shoppingItem = new ShoppingItem('Bamba', 2);


//JSON =  JavaScript  Object Notation

//object to Json String:
const str = JSON.stringify(shoppingItem); //const str:string
console.log(str);

//save the json string
localStorage.setItem('shoppingitem1', str);

//read the json from localStorage:
const strFromDisk = localStorage.getItem('shoppingitem1');

//string to object
const obj = JSON.parse(strFromDisk);
console.log(obj.name, obj.amount);
console.log(obj);