// Using this keyword in regular and arrow functions 
var age = 1998;

const sampleObject = {
    firstName : `Venkata`,
    lastName : `Phani`,
    age : 1998,
    loaction : `Banglore`,

    //method 
    noOfYears : function(){
        return 2024 -this.age;
    },

     arrow : year =>{
        return 2024 - this.age;
    },

}
console.log(sampleObject.noOfYears());
console.log(sampleObject.arrow());
