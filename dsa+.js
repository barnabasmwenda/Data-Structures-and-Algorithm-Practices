// Write a JavaScript function that takes an array of integers as input and
// returns the "product sum" of the array. The product sum is calculated
// by multiplying each integer in the array by its position (index + 1),
// then summing all the products.
// For example, given the input array [2, 3, 4, 5],
// the product sum would be calculated as follows:
// (2 * 1) + (3 * 2) + (4 * 3) + (5 * 4) = 2 + 6 + 12 + 20 = 40

const array = [2, 3, 4, 5];
const getProductSum = (arr) => {
  let currentProduct = 0;
  let totalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currentProduct = arr[i] * (i + 1);
    totalSum = totalSum + currentProduct;
  }

  return totalSum;
};
//console.log(getProductSum(array));

// Write a JavaScript function that takes a string as input and
// returns the reverse of the string. The reverse of a string is the string with its characters in opposite order
const reverseString = (str) => {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
};
// console.log(reverseString("hello"));

// Write a JavaScript function that takes an array of strings as input and
// returns a new array containing the lengths of the strings in the input array.
// For example, given the input array ["apple", "banana", "orange"],
// the function should return [5, 6, 6], as the lengths of the strings are 5, 6, and 6 respectively.

const getStringLengths = (arr) => {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i].length);
  }

  return newArray;
};
const mixedStrings = ["job", "Alex", "Lee", "aleko", "Alison", "Jonathan"];
// console.log(getStringLengths(mixedStrings));

// Write a JavaScript function that takes a string as input and returns a new string with the vowels removed.
// Vowels are the letters 'a', 'e', 'i', 'o', and 'u'.
// For example, given the input string "hello", the function should return "hll".

const removeVowels = (str) => {
  let finalString = "";
  const vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i].toLowerCase())) {
      finalString += str[i];
    }
  }

  return finalString;
};

const stringExample = "helli";
// console.log(removeVowels(stringExample));

// Write a JavaScript function that takes an array of numbers as input
// and returns the sum of all numbers that are divisible by both 3 and 5.
// For example, given the input array [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 30, 45],
// the function should return the sum 60, as the numbers 15, 30, and 45 are divisible by both 3 and 5.

const getSumOfNumbersDivisibleByTwoAndThree = (arr) => {
  let sum = 0;

  const isDivisibleByThreeOrFive = (num) => {
    return num % 3 === 0 && num % 5 === 0;
  };

  for (let i = 0; i < arr.length; i++) {
    if (isDivisibleByThreeOrFive(arr[i])) {
      sum += arr[i];
    }
  }

  return sum;
};

const divisibleByTwoAndThreeArray = [
  2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 30, 45,
];
// console.log(getSumOfNumbersDivisibleByTwoAndThree(divisibleByTwoAndThreeArray));

// Write a JavaScript function that takes an array of strings as input and
// returns the longest string in the array. If there are multiple longest strings, return the first one encountered.
// For example, given the input array ["apple", "banana", "orange", "kiwi", "grape"],
// the function should return "banana" because it is the longest string in the array.

const getLongestString = (arr) => {
  let longestString = "";
  for (let i = 0; i < arr.length; i++) {
    if (longestString.length < arr[i].length) {
      longestString = arr[i];
    }
  }
  return longestString;
};
// console.log(getLongestString(["apple", "banana", "orange", "kiwi", "grape"]));
