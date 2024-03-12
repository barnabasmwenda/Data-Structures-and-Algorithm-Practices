const numbers = [2, 5, 3, 2, 8, 5, 2, 3, 2, 4, 5, 6, 7];
const strings = ["barnabas", "job", "alexander", "clifford", "aleko", "alison"];

//Write a JavaScript function finds sum of elements in an array
let sum = 0;
const findSumOFElements = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};
//console.log("sum: " + findSumOFElements(numbers));

//Write a JavaScript function that takes an array of numbers as input and returns the largest number in the array.
let largest = 0;

const findLargestNumber = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
};
//console.log("largest: " + findLargestNumber(numbers));

// Write a JavaScript function that takes an array of numbers as input and returns a new array containing only the even numbers from the input array.
const returnEvenNumberArray = (arr) => {
  let evenNumberArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumberArray.push(arr[i]);
    }
  }
  return evenNumberArray;
};
//console.log("New array: " + returnEvenNumberArray(numbers));

//Write a JavaScript function that takes an array of strings as input and returns a new array containing only the strings that have a length greater than 5 characters.
const returnLengthyStrings = (arr) => {
  let newStringArray = [];
  const maxNumberOfCharacters = 5;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length > maxNumberOfCharacters) {
      newStringArray.push(arr[i]);
    }
  }
  return newStringArray;
};
// console.log(
//   "Strings longer than 5 characters array: " + returnLengthyStrings(strings)
// );

//Write a JavaScript function that takes an array of numbers as input and returns a new array containing only the unique elements from the input array (i.e., removing duplicates).
const getUniqueElements = (arr) => {
  let uniqueElementsArray = [];
  for (i = 0; i < arr.length; i++) {
    if (!uniqueElementsArray.includes(arr[i])) {
      uniqueElementsArray.push(arr[i]);
    }
  }
  return uniqueElementsArray;
};
//console.log(getUniqueElements(numbers));

//Write a JavaScript function that takes an array of strings as input and returns a new array containing only the strings that start with the letter 'A' (case insensitive).
const getLetterAStrings = (arr) => {
  let letterAArray = [];
  const startingLetter = "a";
  for (i = 0; i < arr.length; i++) {
    if (arr[i][0] === startingLetter) {
      letterAArray.push(arr[i]);
    }
  }
  return letterAArray;
};
//console.log(getLetterAStrings(strings));

//Write a JavaScript function that takes an array of numbers as input and returns the sum of all numbers that are divisible by 3.
const numbersArray = [3, 9, 5, 12, 7, 18, 10, 21, 15];

const getSumOfNumbersDivisibleByThree = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      sum = sum + arr[i];
    }
  }
  return factorialSum;
};
//console.log(getFactorialsOFThree(numbersArray));

// Write a JavaScript function that takes an array of strings as input and returns a new array containing only the strings
// that have a length greater than 3 characters and start with a capital letter.

const mixedStrings = [
  "Bruno",
  "Barnabas",
  "job",
  "Alex",
  "Lee",
  "alexander",
  "Clifford",
  "aleko",
  "Alison",
  "Jonathan",
];

const getThreeCharacterStringWithFirstUppercase = (arr) => {
  let finalArray = [];
  const maxNumberOfCharacters = 3;

  const isUpperCase = (string) => {
    return /^[A-Z]/.test(string);
  };

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxNumberOfCharacters && isUpperCase(arr[i][0])) {
      finalArray.push(arr[i]);
    }
  }

  return finalArray;
};
//console.log(getThreeCharacterStringWithFirstUppercase(mixedStrings))

// Write a JavaScript function that takes an array of numbers as input and
// returns a new array containing only the prime numbers from the input array.
const numbersPrime = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const getPrimeNumbers = (arr) => {
  let finalArray = [];

  const isPrimeNumber = (number) => {
    if (number <= 1) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }

    return true;
  };

  for (let i = 0; i < arr.length; i++) {
    if (isPrimeNumber(arr[i])) {
      finalArray.push(arr[i]);
    }
  }

  return finalArray;
};
//console.log(getPrimeNumbers(numbersPrime));

//Write a JavaScript function that takes an array of strings as input and returns
// a new array containing only the strings that contain the letter 'a' (case insensitive).

const getStringsIncludingLetterA = (arr) => {
  let newArray = [];
  const character = "a";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase().includes(character)) {
      newArray.push(arr[i]);
    }
  }

  return newArray;
};
//console.log(getStringsIncludingLetterA(mixedStrings));

// Write a JavaScript function that takes an array of numbers as input and
// returns a new array containing only the numbers that are divisible by both 2 and 3.
const isDivisibleByTwoAndThree = (arr) => {
  let newArray = [];

  const isDivisible = (number) => {
    if (number % 2 === 0 && number % 3 === 0) {
      return true;
    }

    return false;
  };

  for (let i = 0; i < arr.length; i++) {
    if (isDivisible(arr[i])) {
      newArray.push(arr[i]);
    }
  }

  return newArray;
};

const numberArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15];
// console.log(isDivisibleByTwoAndThree(numberArray));

// Write a JavaScript function that takes an array of strings as input and
// returns a new array containing only the strings that have an even number of characters.

const getEvenCharacterNumbers = (arr) => {
  let newArray = [];

  const isEvenCharacters = (string) => {
    if (string.length % 2 === 0) {
      return true;
    }

    return false;
  };

  for (let i = 0; i < arr.length; i++) {
    if (isEvenCharacters(arr[i])) {
      newArray.push(arr[i]);
    }
  }

  return newArray;
};
//console.log(getEvenCharacterNumbers(mixedStrings));

// Write a JavaScript function that takes an array of numbers as input and
// returns the sum of all the numbers that are greater than 10.

const getSumForNumbersGreaterThanTen = (arr) => {
  let sum = 0;
  const maxNumber = 10;

  const isNumberGreaterThanTen = (number) => {
    return number > maxNumber;
  };

  for (let i = 0; i < arr.length; i++) {
    if (isNumberGreaterThanTen(arr[i])) {
      sum = sum + arr[i];
    }
  }

  return sum;
};
// console.log(getSumForNumbersGreaterThanTen([21, 2, 2, 3, 12, 10]));

// Write a JavaScript function that takes an array of numbers as input and returns the count of numbers that are multiples of both 3 and 5.
const getCountOfMultiplesOfThreeAndFive = (arr) => {
  let count = 0;

  const isMultipleOfThreeAndFive = (number) => {
    if (number % 3 === 0 && number % 5 === 0) {
      return true;
    }

    return false;
  };

  for (let i = 0; i < arr.length; i++) {
    if (isMultipleOfThreeAndFive(arr[i])) {
      count++;
    }
  }

  return count;
};
//const multipleOfThreeAndFive = [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 30, 45];
//console.log(getCountOfMultiplesOfThreeAndFive(multipleOfThreeAndFive));

// Write a JavaScript function that takes an array of strings as input and
// returns a new array containing only the strings that start with the letter 'A' (case insensitive).
const getAStrings = (arr) => {
  let newArray = [];
  const letter = "A";
  const isStartingWithLetterA = (str) => {
    if (str[0].toUpperCase() === letter) {
      return true;
    }

    return false;
  };

  for (let i = 0; i < arr.length; i++) {
    if (isStartingWithLetterA(arr[i])) {
      newArray.push(arr[i]);
    }
  }

  return newArray;
};
//console.log(getAStrings(mixedStrings));

//Given two arrays A and B, Write an efficient function that returns their difference
const getArrayDifference = () => {
  const arrayA = [1, 2, 3, 4, 5];
  const arrayB = [2, 4, 5];
  let finalArray = [];

  const getArrayItems = (array) => {
    for (let i = 0; i < array.length; i++) {
      return array[i];
    }
  };

  if (getArrayItems(arrayA) === getArrayItems(arrayB)) {
    return;
  } else {
    finalArray.push(getArrayItems(arrayA));
    finalArray.push(getArrayItems(arrayB));
  }

  return finalArray;
};
// console.log(getArrayDifference());

// Write a JavaScript function that takes an array of numbers
// as input and returns the largest number in the array

const getLargestNumberInArray = (arr) => {
  let largestNumber = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }
  return largestNumber;
};
// console.log(getLargestNumberInArray(numbersArray));

// Write a JavaScript function that takes an array of numbers as input and
// returns a new array containing only the numbers that are odd
const getOddNumbers = (arr) => {
  let newArray = [];

  const isOdd = (number) => {
    return number % 2 !== 0;
  };

  for (let i = 0; i < arr.length; i++) {
    if (isOdd(arr[i])) {
      newArray.push(arr[i]);
    }
  }

  return newArray;
};
// console.log(getOddNumbers(numbersArray));

//Write a function to remove duplicates in an array e.g. [1,2,3,1,4,5,6,6,7,8] should return [1,2,3,4,5,6,7,8]
const duplicatedArray = [1, 2, 3, 1, 4, 5, 6, 6, 7, 8];
const removeArrayDuplicates = (arr) => {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (!arr.slice(i + 1).some((x) => x === arr[i])) {
      newArray.push(arr[i]);
    }
  }

  return newArray;
};
// console.log(removeArrayDuplicates(duplicatedArray));
