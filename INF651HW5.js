/* Practice Assignment 6:

Complete this javascript file according to the individual instructions
given in the comments. 

*** DO NOT CHANGE any of the code that you are not instructed to. */

// 1) Create an array named myPizzaOrder that cannot be reassigned and
// contains the 3 elements: "Pepperoni", 12.99, false

let myPizzaOrder = ["Pepperoni", 12.99, false];

// 2) Create a function named getPizzaType that will accept an array
// as a parameter and returns the 1st element from the array.

function getPizzaType(arr) {
    if (arr instanceof Array) {
        return(arr[0]);
    }
} 
// 3) Create a function named addTax that will accept an array
// like your myPizzaOrder array as a parameter. The function will
// insert an element into the array between the 2nd and 3rd
// element in the array that is equal to the 2nd element multiplied
// by 0.0925 and rounded to the nearest penny (ie 0.95, 0.79, 0.42, etc).
// The function should return the array.
// ===========
// Hint: find the method that will allow you to set the decimals.
function addTax(arr) {
    if(arr instanceof Array) {
        let tax = arr[1]*0.0925;
        tax = Math.ceil(tax*100)/100;
        arr.splice(2,0,tax);
        return arr;
    }
}


// 4) Create a function named completeOrder that will accept an array
// as a parameter. The function will change the value of the 4th
// element in the array to true and return the array.

function completeOrder(arr) {
    if(arr instanceof Array) {
        arr[3] = true;
        return arr;
    }
}

// 5) Create a function named allTheNumbers that accepts a number as
// a parameter. The function will create an array that contains all of
// the numbers from 1 to whatever number the parameter is. The array
// should not include the parameter number. The function returns
// the array.

function allTheNumbers(number) {
    let arr = [];
    for(let i = 1; i < number; i++) {
        arr.push(i);
    }
    return arr;
}
// 6) Create a function named getEvens that accepts 2 parameters:
// startNum and endNum. The function should return an array that
// includes the even numbers from startNum to endNum. If the startNum
// or endNum are even, they should be included in the returned array.

function getEvens(startNum, endNum) {
    let arr = [];
    for(let i = startNum; i <= endNum; i++) {
        if((i%2) == 0) {
            arr.push(i);
        }
    }
    return arr;
}
// 7) Create a function named getLastElement that accepts an array
// as a parameter and returns the last element of the array. The
// array can have any number of elements. The function should always
// return the last element.

function getLastElement(arr) {
    if(arr instanceof Array) {
        return(arr[arr.length - 1]);
    }
}
// 8) Create a function named combineArrays that accepts two arrays
// as parameters and combines them into one array. The function
// should return the new combined array.

function combineArrays(arr1, arr2) {
    if(arr1 instanceof Array && arr2 instanceof Array) {
        let mergedArray = arr1.concat(arr2);
        return mergedArray;
    }
}
// 9) Create a function named isPalindrome that accepts a string as
// a parameter. The function will return true if the string is a
// palindrome and false if the string is not. To check for a
// palindrome, remove all spaces and set to lowercase. The string
// will be identical both forward and reverse if it is a palindrome.
// For example: Taco Cat is a palindrome. tacocat is the same both
// forward and reverse.

function isPalindrome(str) {
    str = str.split(" ").join("");
    str = str.toLowerCase();
    let testStr = [];
    for(let i = str.length - 1; i >= 0; i--) {
        testStr.push(str[i]);
    }
    if( str === testStr.join('')) {
        return true;
    } else {
        return false;
    }
}
// ==========
// Hints: There are several possible solutions for this. I use a
// combination of string and array methods. You can turn the string
// into an array, use arrays methods, and turn the array back into
// a string. This is also a challenge on freeCodeCamp. Check the
// help forums there if you get stuck!