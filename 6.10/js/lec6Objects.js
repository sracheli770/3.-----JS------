//bunch of props (variables):
let car1Vendor = 'Fiat';
let car1Model = 'Punto';
let car1Year = 1999;


//Object = real life object: js syntax to describe a real life entity
//car = a bundle of props
const car1 = {
    //properties of car:
    vendor: "Fiat",
    model: "Punto",
    year: 1999
};

console.log(car1); //{vendor: 'Fiat', model: 'Punto', year: 1999}
console.log(car1.vendor); //"Fiat"
console.log(car1.model); //"Punto"
console.log(car1.year); //1999

console.log(car1['vendor']);


const person1 = {
    fName: "Racheli", lName: "Sasonkin", id: "211789276", age: 21,
    sayHi() { console.log("Hi"); },
    myName() { console.log(`Hi I'm ${this.fName} ${this.lName}`) },
    /*     myName() { console.log("Hi I'm " + this.fName + " " + this.lName) }*/
}


console.log(person1.fName);
console.log(person1);
person1.sayHi();
person1.myName();


const movie1 = {
    title: "Star Wars: Episode I - The Phantom Menace",
    episode_number: "1",
    main_characters: ["Qui-Gon Jinn", "Obi-Wan Kenobi", "Anakin Skywalker", "Padmé Amidala", "Jar Jar Binks", "Darth Maul"],
    description: "The evil Trade Federation, led by Nute Gunray is planning to take over the peaceful world of Naboo. Jedi Knights Qui-Gon Jinn and Obi-Wan Kenobi are sent to confront the leaders. But not everything goes to plan. The two Jedi escape, and along with their new Gungan friend, Jar Jar Binks head to Naboo to warn Queen Amidala, but droids have already started to capture Naboo and the Queen is not safe there. Eventually, they land on Tatooine, where they become friends with a young boy known as Anakin Skywalker. Qui-Gon is curious about the boy, and sees a bright future for him. The group must now find a way of getting to Coruscant and to finally solve this trade dispute, but there is someone else hiding in the shadows. Are the Sith really extinct? Is the Queen really who she says she is? And what's so special about this young boy?",
    poster: "star_wars_episode_1_poster.png",
    hero_image: "star_wars_episode_1_hero.jpg"
}


const box = document.getElementById('box');
//show movie1 in HTML:
//show the title and description in html
box.innerHTML = `<h1>${movie1.title}</h1><p>${movie1.description}</p>`;
//show all the characters בלי פסיקים
movie1.main_characters.forEach(c => box.innerHTML += c + " | "/* `${c}<br>` */)
box.innerHTML += `<img src="images/star_wars/${movie1.poster}">`