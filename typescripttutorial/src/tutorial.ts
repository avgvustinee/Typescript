
// string 
let awesomeName:string = 'shakeAndBake';
awesomeName = 'something';
awesomeName = awesomeName.toUpperCase();
console.log(awesomeName);

// numbers

let age:number = 20;
age ++;
console.log(`happy birthday to  ${age}st birthday`);

// boolean 

let isAdult:boolean = age>=18;
isAdult =!isAdult;
console.log("is augustine an adult, true or false :", isAdult)

// Arrays

let arrayName: string[] = ['Augustine','Kholofelo', 'Mafolo', 'Shokane'];
console.log(arrayName);
console.log(arrayName.toString().startsWith('A'));

// Objects

let person: {
    name:string;
    age:number;
}

person={
    name:'Augustine',
    age:24
}

console.log(person)

// function 

let greeting: (name: string) => void = (name: string) => {
    console.log(`hello ${name}`);
};

greeting('Augustine')
