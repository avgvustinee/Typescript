// type Aliases

type Name = string;
let firstName: Name;
let lastName: Name;

type Person = {
    name: string;
    age: number;
};

let person: Person = {
    name: 'John',
    age: 25
};


type alphanumeric = string | number;

let input: alphanumeric;
input = 100; // valid
input = 'Hi'; // valid
