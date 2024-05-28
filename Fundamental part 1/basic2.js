/////////function with parameters

// function value(number1, number2){
//     console.log(number1+number2);
// }
// value(1,2);

// function test(test1, test2){
//     if(test1>=35 && test2 >= 35){
//         console.log(` u are passed`)
//     }
//     else{
//         console.log(`u are fail`);
//     }
// }
// test(33,56);

////////Arrow functions

// const age = year => 2000- year;
// const age1= age(1999);
// console.log(age1); 

// const eligible = (birthyear, fn) =>{
//     const vote = 2024-birthyear;

//     if(vote>= 18){
//         console.log(`${fn} is eligible for voting`);
//         // return `${fn} is eligible for voting`
//     }
//     else{
//         console.log(`${fn} is not eligible`);
//         // return`${fn} is not eligible for voting`
//     }
// }

// eligible(1999, `Prasad`);


///////Array
const list = [1, 2, 3, 4, 5];
console.log(list);//o/p will  be 5 as there are 5 elements 
console.log(list[2]);//o/p will be number 3 as index of 2 is 3

const listItems = [`sugar`, `dal`, `aata`, `chenna`];
console.log(listItems);
console.log(listItems[4]);//here o/p will be undefined cause index is out of range
console.log(listItems.length);// we get length of the array that is 4 

//////basic operations in array 
// push is used for adding item at last
listItems.push('jaggery');
console.log(listItems);
// unshift is used for adding item at first 
listItems.unshift(`oil`);
console.log(listItems);
// pop is used for deleting last item
listItems.pop();
console.log(listItems);
//shift is used for deleting first item 
listItems.shift();
console.log(listItems);
//index will give index of an particular element
console.log(listItems.indexOf(`sugar`));//o/p will be 0 i.,e it will give index of particular element
console.log(listItems.indexOf(`oil`));//o/p will be -1 as there is no `oil` in the array
// includes will show true or false
console.log(listItems.includes("aata"));//o/p will be true cause item is present in array
console.log(listItems.includes(`oil`));//o/p will be false cause item is not present in array