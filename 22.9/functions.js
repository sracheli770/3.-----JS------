function random(max) {
    let r = Math.random() * max; // 0-0.9999999
    /*  r = Math.random(r) * max; *///max = 10 --> 0-9.99999999999
    r = Math.floor(r); // round down. 0-9
    return r;
}

console.log(random(10));

//הגרלת קלף רנדולמלי
let cards = ["Jack", "Queen", "King", "Ace", "2"];
let i = random(cards.length);
console.log(cards[i]);