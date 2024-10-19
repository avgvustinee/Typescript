// function

function add(num1: number, num2: number): number {
    let result = num1 + num2;
    return result;

}

//console.log(add(4, 2));

function calculateDiscount(price: number): number {
    const hasDiscount: Boolean = true;

    if (hasDiscount) return price;
    return price * 0.9

}

const finalPrice = calculateDiscount(200);
console.log(finalPrice);

// Array function

let sum = (num1: number, num2: number): number => num1 + num2;
console.log(sum(5, 7));

let multiply = (num1: number, num2: number): number => {

    return num1 * num2;
}

console.log(multiply(1, 2));

let Name = () => console.log("Augustine");
Name();