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

// Write a JavaScript function that takes an array of numbers as input
// and returns the median of the numbers. The median is the middle value of a sorted list of numbers.
// If the number of elements is even, it returns the average of the two middle numbers.
// For example, given the input array [3, 5, 1, 2, 4], the function should return 3
// since it's the median of the sorted list [1, 2, 3, 4, 5].x
const oddNumberArray = [7, 2, 9, 4, 5];
const evenNumberArray = [6, 3, 1, 9, 2, 8];

const getArrayMedian = (arr) => {
  const sortedArray = arr.sort((a, b) => a - b);
  let median = 0;

  if (arr.length % 2 !== 0) {
    const middleIndex = Math.floor(arr.length / 2);
    median = sortedArray[middleIndex];
  } else {
    const middleIndex1 = arr.length / 2 - 1;
    const middleIndex2 = arr.length / 2;
    median = (sortedArray[middleIndex1] + sortedArray[middleIndex2]) / 2;
  }

  return median;
};

//console.log(getArrayMedian(oddNumberArray));
// console.log(getArrayMedian(evenNumberArray));

// Write a JavaScript function that takes an array of strings as input
// and returns an object containing the frequency of each string in the array.
// For example, given the input array ["apple", "banana", "apple", "orange", "banana", "apple"],
// the function should return { "apple": 3, "banana": 2, "orange": 1 }.

const getFrequencyOfElements = (arr) => {
  const frequencyObject = {};
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (frequencyObject[element]) {
      frequencyObject[element]++;
    } else {
      frequencyObject[element] = 1;
    }
  }
  return frequencyObject;
};

const frequencyCountArray = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "apple",
];
//console.log(getFrequencyOfElements(frequencyCountArray));

// Write a JavaScript function that takes an array of numbers as input and
// returns an object containing the count of even and odd numbers in the array.
// For example, given the input array [1, 2, 3, 4, 5],
// the function should return { "even": 2, "odd": 3 }.

const getEvenAndOddCount = (arr) => {
  let countObject = {
    even: 0,
    odd: 0,
  };

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      countObject.even++;
    } else {
      countObject.odd++;
    }
  }
  return countObject;
};

// console.log(getEvenAndOddCount([1, 2, 3, 4, 5]));

// Write a JavaScript function that takes an array of integers as input and
// returns an object containing the count of positive and negative numbers in the array.
// For example, given the input array [-2, 5, 3, -8, 0, 1, -6],
// the function should return { "positive": 3, "negative": 3 }.

const getPositiveAndNegativeCount = (arr) => {
  let countObject = {
    positive: 0,
    negative: 0,
  };

  const isPositive = (number) => {
    return number > 0;
  };

  for (let i = 0; i < arr.length; i++) {
    if (isPositive(arr[i])) {
      countObject.positive++;
    } else if (arr[i] < 0) {
      countObject.negative++;
    }
  }

  return countObject;
};

// console.log(getPositiveAndNegativeCount([-2, 5, 3, -8, 0, 1, -6]));

// Write a JavaScript function that takes an array of strings as input and
// returns an object containing the count of strings
// with lengths divisible by 3 and lengths not divisible by 3.
// For example, given the input array ["cat", "dog", "elephant", "lion", "tiger"],
// the function should return { "divisibleByThree": 2, "notDivisibleByThree": 3 }.

const getStringLengthsDivisibleByThree = (arr) => {
  let divisibilityObject = {
    divisibleByThree: 0,
    notDivisibleByThree: 0,
  };

  const isDivisibleByThree = (num) => {
    return num % 3 === 0;
  };

  for (let i = 0; i < arr.length; i++) {
    if (isDivisibleByThree(arr[i].length)) {
      divisibilityObject.divisibleByThree++;
    } else {
      divisibilityObject.notDivisibleByThree++;
    }
  }

  return divisibilityObject;
};

// console.log(
//   getStringLengthsDivisibleByThree(["cat", "dog", "elephant", "lion", "tiger"])
// );

// Write a JavaScript function that takes an array of numbers as input and
// returns the difference between the largest and smallest numbers in the array.
// For example, given the input array [10, 3, 5, 9, 2], the function should return 8,
// as the difference between the largest number (10) and the smallest number (2) is 8.
const getLargestAndSmallestNumberDifference = (arr) => {
  let sortedArray = arr.sort((a, b) => a - b);
  return sortedArray[sortedArray.length - 1] - sortedArray[0];
};

// console.log(getLargestAndSmallestNumberDifference([10, 3, 5, 9, 2]));

// Write a JavaScript function that takes an array of integers as input and
// returns the sum of the squares of all positive numbers in the array.
// If the array is empty or contains no positive numbers, return 0.
// For example, given the input array [2, -3, 4, -5, 6],
// the function should return 56 (2^2 + 4^2 + 6^2 = 4 + 16 + 36 = 56).

const getSumOfPositiveNumberSquares = (arr) => {
  let finalAmount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      finalAmount += arr[i] * arr[i];
    }
  }

  return finalAmount;
};

//console.log(getSumOfPositiveNumberSquares([2, -3, 4, -5, 6]));

// Write a function called getSecondLargestNumber that takes an array of numbers as input and
// returns the second largest number in the array. If there's no second largest number, return null.
// For example, getSecondLargestNumber([10, 5, 8, 12, 7]) should return 10.

const getSecondLargestNumber = (arr) => {
  let sortedArray = arr.sort((a, b) => a - b);
  if (sortedArray.length < 2) {
    return null;
  }
  return sortedArray[sortedArray.length - 2];
};

// console.log(getSecondLargestNumber([10, 5, 8, 12, 7]));
// console.log(getSecondLargestNumber([10])); // Output: null
// console.log(getSecondLargestNumber([]));

// Write a JavaScript function that takes an array of strings as input and
// returns an array containing only the strings that have more than three characters and start with the letter 'a'.
// For example, given the input array ["apple", "banana", "orange", "kiwi", "grape"],
// the function should return ["apple", "banana", "orange"].,

const getStringsOverThreeCharactersStartingWithA = (arr) => {
  let finalArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 3 && arr[i][0] === "a") {
      finalArray.push(arr[i]);
    }
  }

  return finalArray;
};

console.log(
  getStringsOverThreeCharactersStartingWithA([
    "apple",
    "kiwi",
    "grape",
    "is",
    "it",
    "army",
  ])
);
