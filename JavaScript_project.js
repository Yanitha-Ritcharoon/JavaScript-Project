var ages = [3,9,23,64,2,8,28,93]; 
// substract the value of the first element and last element
let x = ages[0];
let y = ages[ages.length-1];
console.log(y - x);
ages.push(33);
console.log(ages);

// average age by loop
var sum = 0;
for (i=0; i<ages.length; i++) {
        sum += ages[i];
    }
console.log(sum/ages.length);
 
//create new an array
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//average number of letters per name by loop
var sum = 0;
for (i=0; i<names.length; i++);{
    let i = sum;
    sum = sum + names[i].length
} average = sum/names.length;
console.log(average);

//Use a loop to concatenate all the names together, separated by spaces
let allNames = "";
for (i=0; i<names.length; i++){
    allNames += names[i] + " ";
}
console.log(allNames);
//access the last element of any array
//access the first element of any array
    let f=names[0];
    let l=names[names.length-1];
    console.log("Last element is "+ l);
    console.log("First element is "+ f);
    
//Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array
let nameLengths = [];
nameLengths.push(3, 5, 3, 5, 4, 3);
for (i=0; i<names.length; i++) {
    nameLengths[i] = names[i].length
}
console.log(nameLengths);

//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
sum = 0;
for(let i=0; i<nameLengths.length; i++){
    sum += nameLengths[i];
} 
console.log(sum);

//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times
let word = "Great!";
let n = 3;
function repeat(word, n) {
    var a = [];
    while(a.length < n) {
        a.push(word);
    }
    return a.join('');
} console.log(repeat(word, n));

//Write a function that takes two parameters, firstName and lastName, and returns a full name.
//The full name should be the first and the last name separated by a space.
function createFullName(firstName, lastName){
    console.log(firstName + ' ' + lastName);
}
createFullName('Yanitha', 'Ritch');

//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100
function returnSum(ages) {
    if (ages > 100);
    return true;
} console.log(returnSum(ages));

//Write a function that takes an array of numbers and returns the average of all the elements in the array
function calculateAverage(ages) {
    var sum = 0;
    var count = 0;
    ages.forEach(function(ages) {
        sum += ages;
        count++;
    });
    return sum/count;
}
console.log(calculateAverage(ages));

/*Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than 
the average of the elements in the second array*/
array1 = [3, 6, 9, 4, 2];
array2 = [9, 8, 1, 5, 3];
function compareAverages(array1, array2) {
    let x = 0;
    for (let element of array1) {
        x += element;
    }
    let y = 0;
    for (let element of array2) {
        y += element;
    }
    let firstArray = x/array1.length;
    let secondArray = y/array2.length;
    if ( firstArray > secondArray) {
        return true;
    } else {
        return false;
    }
}
console.log(compareAverages(array1, array2));

/*Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
and returns true if it is hot outside and if moneyInPocket is greater than 10.50.*/
function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside == true && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
} 
console.log(willBuyDrink(true, 15));

//Create a function of your own that solves a problem. 
//In comments, write what the function does and why you created it

/*This function will help staff to know if the person can play the game.
Required age for join the game is greater than or equal 13 years old*/
function checkCanPlay(age) {
    return (age >= 13);
}
var currentAge = 17;
if (checkCanPlay(currentAge)) {
    console.log('This person can play');
} else {
    console.log('This person is too young');
}
/*I use if-else to check if the person can play then print 'This person can play'. Otherwise, print 'This person is too young'. 
This function will print the answer even is false because if a certain condition is satisfied certain code block is executed otherwise else code block is executed.*/