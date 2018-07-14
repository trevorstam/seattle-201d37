'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

//Write your code here
function sum(a, b) { //eslint-disable-line
  var total = a + b;
  var arr = [];
  arr.push(total);
  var msg = 'The sum of ' + a + ' and ' + b + ' is ' + total + '.';
  arr.push(msg);

  return arr;
  // return [a + b, 'The sum of ' + a + ' and ' + b + ' is ' + total + '.'];
}

// Here is the test for sum(); uncomment it to run it
testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a, b){ //eslint-disable-line
  var product = a * b;//define calculation of product
  var multArr = [];//create empty array to push product into
  multArr.push(product); // push product into empty array
  var multMsg = 'The product of '+ a + ' and ' + b + ' is ' + product + '.';//write message
  multArr.push(multMsg);//push message into array

  return multArr; //return array, this return the product and the message
}

// Here is the test for multiply(); uncomment it to run it
testMultiply(5, 9)

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns 
an array where the first element is the sum of those three numbers, 
the second element is the product of those three numbers,  
and the third and fourth elements are strings that EXACTLY follow this example and 
use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. 
To do addition, use your sum() function, and to do multiplication, use your multiply() 
function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a, b, c) { //eslint-disable-line
  //SUM A B and C
  //create empty array for  values
  allValues = [];
  //use sum to add a and b and define variable, retrieve only first element of sum function
  var sumAB = sum(a, b)[0];
  //define variable for (a+b)+c
  var sumABC = sum(sumAB, c)[0];
  //push sumAB into empty array allValues
  allValues.push(sumABC);

  //PRODUCT OF AB and C
  //create variable productAB, add index [0] to retrieve only first element of multiply function
  var productAB = multiply(a, b)[0];
  //create variable where productAB is multiplied by c
  var productABC = multiply(productAB, c)[0];
  //push productABC into array allValues
  allValues.push(productABC);

  // ADD STRING OF TEXT THAT DESCRIBES THE SUM OF VALUES ABC
  msgSumABC = a + ' and ' + b + ' and ' + c + ' sum to ' + sumABC + '.';
  //push string into allValues
  allValues.push(msgSumABC);

  //ADD STRING OF TEXT THAT DESCRIBES THE PRODUCT OF VALUES ABC
  msgProdABC = 'The product of '+ a + ' and ' + b + ' and ' + c + ' is ' + productABC + '.';
  //push string into allValues
  allValues.push(msgProdABC); 


  return allValues;

}

// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument 
and then returns an array where the first element is the sum of the numbers in the array, 
and the second element is a string that EXACTLY follows this example and uses the values 
that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function.
 To do addition, use your sum() function that you've already created. 
 You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, 
uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
var testArray = [2, 3, 4]; //eslint-disable-line

function sumArray(sumArr) { //eslint-disable-line
  //Assign an empty array. This will be returned at the end of the function
  var resultArray = [];

  //RETURNS ARRAY. FIRST ELEMENT IN ARRAY IS SUM OF NUMBERS
  //create variable firstSum. This variable takes the number at index 0 of testArray and sums it with 
  //number at index 1
  //retrieve only index 0 from sum function
  var firstSum = sum(testArray[0], testArray[1])[0];

  //create variable totalSum. This takes the sum of firstSum and element at index 2.
  //retrieve only index 0 from sum function
  var totalSum = sum(firstSum, testArray[2])[0];
  //push firstSum and totalSum into resultArray
  resultArray.push(totalSum);
  
  //SECOND ELEMENT IS A STRING
  //assign message to variable
  var arrayMessage = testArray[0] + ',' + testArray[1] + ',' + testArray[2] +
  ' was passed in as an array of numbers, and ' + totalSum + ' is their sum.';

  //push arrayMessage into resultArray
  resultArray.push(arrayMessage);
  //return resultArray
  return resultArray;
}

// Here is the test for sumArray(); uncomment it to run it

testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array 
whose first element is the product of those numbers, and the second element is a string that EXACTLY follows 
this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, 
use your multiply() function that you've already created. 
You're going to have to be resourceful to figure out how to do this. 
This function should handle an array containing three elements.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(multArr) { //eslint-disable-line
  //create empty array. This is the recepticle of the end results
  var finalProductarray = [];
  //Do a product of the first two numbers of the test array. Only use index[0] of multiply function. Assign variable
  var arrayProductAB = multiply(testArray[0], testArray[1])[0];
  // multiply arrayProductAB with element [2] from testArray
  var arrayProductABC = multiply(arrayProductAB, testArray[2])[0];
  //Push into finalProductarray
  finalProductarray.push(arrayProductABC);
  //create message variable
  var productMessage = 'The numbers ' + testArray[0] + ',' + testArray[1] + ',' + testArray[2] +
  ' have a product of '+ arrayProductABC + '.';
  //push message to array
  finalProductarray.push(productMessage);
  
  return finalProductarray;
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop.

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
var testDynamicArray = [1,2,3,4,5]; //eslint-disable-line

function multiplyAnyArray(dynamicArray) { //eslint-disable-line

}

// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
