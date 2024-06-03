// prmitive 
let lastName = `prasad`;
console.log(`last name is ${lastName}`);//name is prasad

let newName = lastName;//assign lastName value to newName
console.log(`new name is ${newName}`);//name is prasad

newName = `Phani`;
console.log(newName);// name is phani but not changed in lastName it is only changing in newName 

//object
const sampleObject = {
    lastName : `prasad`,
}
console.log(sampleObject.lastName);//name is prasad

newObject = sampleObject;// assign samplObject values to newObject
console.log(newObject.lastName);//lastName is prasad in newObject

newObject.lastName = `Phani`;//changing lastName in newObject
console.log(sampleObject.lastName);//lastName in sampleObject changed as we assigned sampleObject to newObject
console.log(newObject.lastName);//lastName changed in newObject also 