// Array

let skills: string[];
skills= ['Software Engineer', 'Data Engineer']
skills.push('Cloud Engineer')
console.log(skills)

// TypeScript infers the scores array as an array of string | number

let scores :(string| number)[]; 
scores= ['Programming', 5 , 'Theory', 6]
console.log(scores);