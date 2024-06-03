// //variable declaration and initialisation 
// let a = 1;
// let b = 1.23;
// let ch = `a`;
// let sr =`name`;
// let boo = true;
// console.log(`integer : ${a}, float : ${b}, character : ${ch}, String : ${sr}, Boolean : ${boo}`);

// // Type conversion
// let int = `10`;
// let st = 23;

// console.log(Number(int), typeof(int));//converted string type to number
// console.log(String(st), typeof(st));//converted number type to string

// //Data type operations
// //add two integers 
// const i = 10;
// const u = 20;
// const sum = i+u;
// console.log(sum);
// //concatenate
// const st1 = `vara`;
// const st2 = `prasad`;
// console.log(st1+` `+st2);//concatenating two strigs
// //Boolean operations
// const boo1 = true;
// const boo2 = false;
// console.log(boo1 && boo2);

// //Arrays
// let ar =[45,23,876];
// const max = Math.max(...ar);
// console.log(`maximum of an array is : ${max}`);
// const min = Math.min(...ar);
// console.log(`minimum of an array is : ${min}`);

// //User Input and Data Type Conversion:
// const object ={
//     fn:`vara`,
//     ln:`prasad`,
//     year: 1999,
//     height : 1.5,
// }
// const samplePrompt = prompt(`Enter the values`);
//     if(object[samplePrompt]){
//         console.log(object[samplePrompt]);
//     }
//     else{
//         console.log(`Wrong request`);
//     }

// //Basic output
// const quote = `Something is better than nothing`;
// console.log(quote);

// //formated output
// const fn = `vara`;
// const ln = `prasad`;
// const year = 1999;
// const age = 2024 -year;
// console.log(fn+` `+ ln +` was born in the year ${year} and he is ${age} years old`);

// //tabular data display 
// for (let i = 1; i <= 10; i++) {
//     const square = i * i;
//     const cube = i * i * i;
//     console.log( i + ` ` + square + ` ` + cube);
// }

// Conditional Display:
//odd or even
// const ev = 12;
// if(ev%2 === 0){
//     console.log(ev + ` is even number`);
// }
// else{console.log(ev + ` is odd number`)};

//Loop based display
//Multiplication
// const mul = 2;
// for(let i = 1; i<=10;i++){
//     let multi = mul*i;
//     console.log(mul+ ` * `+ i +` =`+multi);
// }

// //Customized Greeting
// const fn = `Prasad`;
// let greet = Math.trunc(Math.random()*3)+1;
// if(greet === 1){
//     console.log(`good morning`);
// }
// else if(greet === 2){
//     console.log(`Good afternoon`);
// }
// else{
//     console.log(`Good evening`);
// }

//Mini application
// function add(x,y){
//     return x + y;
// }
// function sub(x,y){
//     return x-y;
// }
// function mul(x,y){
//     return x*y;
// }
// function div(x,y){
//     return x/y;
// }

// const num1 = Number(prompt(`enter number 1`));
// const num2 = Number(prompt(`enter number 2`));
// const oper = prompt(`enter +,-,*,/`);

// let output;

// switch(oper){
// case `+`:
// output = add(num1, num2);
// break;
// case `-`:
// output = sub(num1,num2);
// break;
// case `*`:
// output = mul(num1,num2);
// break;
// case `/`:
// output = div(num1, num2);
// break;
// }
// console.log(output);

//survey data display
//need to do 

//data types 
// const num = 12;
// const str = `hello`;
// const boo = true;
// let un;
// const nu = null;
// const obj = {
//     fn : `prasad`,
//     age : 25,
// }
// const ar = [10, 2, `hello`];
// console.log(num); console.log(str); console.log(boo); console.log(un);
// console.log(nu); console.log(obj); console.log(ar); 

//factorial 
// let multi = 1;//assign the value 
// for(let i = 5; i>=1;i--){/**in for loop we want factorial for  5 so we have given i =5*/
//     multi = multi*i;/*here we are multiplying with i=5 with multi and now multi =5 and the updation i.,e i = 4*/
// }
// console.log(multi);

//naming conventions
const firstName = `Vara`;
const lastName = `Prasad`;
const age = 25;
const emailAddress = `example@gmail.com`;