// Take an array of numbers and return the sum.
let numArray = [1,2,3]


function addArray(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }

    return sum;
};

console.log(addArray(numArray));

// Take an array of numbers and return the average.
function avgArray(array){
    let sum = addArray(array);
    let avg = sum / array.length;
    return avg;
}

console.log(avgArray(numArray));



// Take an array of strings and return the longest string.
let stringArray = ["hi", "hello", "goodbye", "seven", "looping"];

function longString(array){
    let longest = "";
    let maxlength = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i].length >= maxlength){
            maxlength = array[i].length;
            longest = array[i];
        }
    }
    return longest;
}

console.log(longString(stringArray));

// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
function stringsLongerThan(array, size){
    let output = [];
    for ( let i = 0; i< array.length; i++){
        if(array[i].length > size){
            output.push(array[i]);
        }
    }
    return output;

}
console.log(stringsLongerThan(stringArray,0));


// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
