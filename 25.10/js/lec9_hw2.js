class RestApi {
    //prop without a value
    endpoint;

    //constructor
    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    //method
    put() {
        return `The Endpoint is:${this.endpoint}`;
    }
}

const rest = new RestApi('/movies');

//save an object
//stringify- object to string
localStorage.setItem('r1', JSON.stringify(rest));

//read from disk
let str = localStorage.getItem('r1');
//string to Object
let obj = JSON.parse(str);
console.log(obj.endpoint);
