// Take an array of numbers and return the sum.
let numArray = [1, 2, 3]


function addArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }

    return sum;
};

// console.log(addArray(numArray));

// Take an array of numbers and return the average.
function avgArray(array) {
    let sum = addArray(array);
    let avg = sum / array.length;
    return avg;
}

// console.log(avgArray(numArray));



// Take an array of strings and return the longest string.
let stringArray = ["hi", "hello", "goodbye", "seven", "looping"];

function longString(array) {
    let longest = "";
    let maxlength = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].length >= maxlength) {
            maxlength = array[i].length;
            longest = array[i];
        }
    }
    return longest;
}

// console.log(longString(stringArray));

// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
function stringsLongerThan(array, size) {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > size) {
            output.push(array[i]);
        }
    }
    return output;

}
// console.log(stringsLongerThan(stringArray, 0));


// Take a number, n, and print every number between 1 and n without using loops. Use recursion.


//////PART 2//////

let peopleArray = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
{ id: "48", name: "Barry", occupation: "Runner", age: "25" },
{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }];

// Sort the array by age.
// console.log(peopleArray.sort());////////////////////////////////
peopleArray.sort((a, b) => parseInt(a.age) - parseInt(b.age));
// console.log(peopleArray);/////////////////////////////////////////////


// Filter the array to remove entries with an age greater than 50.
// console.log(peopleArray.filter(people => people.age <= 50));//////////////////////


// Map the array to change the “occupation” key to “job” and increment every age by 1.


let mapArray = peopleArray.map((person) => {
    person.age = parseInt(person.age) + 1;
    person["job"] = person["occupation"];
    delete person.occupation;
    return person;
}
)

console.log(mapArray);


// Use the reduce method to calculate the sum of the ages.

const agesSum = peopleArray.reduce(
    (accumulator, currentValue) => accumulator + parseInt(currentValue.age),
    0,
)

let avgAge = agesSum / peopleArray.length;
console.log(agesSum);
console.log(avgAge);


//Write function that take object and increment age
testObject = {
    name: "chris",
    age: 49,
}

//Modifies object taken in
function incrementAge(object){
    if(object.age || object.age ===0){
        object.age = object.age+ 1;
    }else{
        object.age = 0;
    }
    object.updated_at = Date.now();
}
console.log(testObject);
incrementAge(testObject, testObject.age);
console.log(testObject);



//Take an object, make a copy, and increment the age field of the copy. Return the copy.
function copyIncrementAge(object){
    output = {}
    for(i in object){
        output[i]= object[i];
    }
    if(output.age || output.age === 0){
        output.age = output.age +1;
    }else{
        output.age = 0;
    }
    output.updated_at = Date.now();
    return output;
}
console.log("test object before copy",testObject);
copyObject = copyIncrementAge(testObject);
console.log("copied object ",copyObject);
console.log("test object after copy is made", testObject);
