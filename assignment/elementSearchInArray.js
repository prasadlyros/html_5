// Element search in array 

function findElement(array, element){
    for(let i = 0; i<= array.length; i++){
        if(array[i] === element){
            return i;
        }
        else{
            return -1;
        }
    }
}

function  main(){
    const arr = [1,2,3,4,5]
    const number = 67;
    const index = findElement(arr, number);
    if(index !== -1){
        console.log(`the number ${number} is found at index ${index}`);
    }
    else{
        console.log(`the number ${number} is not found so the index is -1`);
    }
}

main();
