// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num%2 ===0){
    return true;
  } else {
    return false;
  }
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b){
    return a;
  } else {
    return b;
  }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a > b && a > c){
    return a;
  } else if (b > a && b > c){
    return b;
  } else {
    return c;
  }
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let sum = 0;
  for ( let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  return sum; 
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  return Math.max.apply(null, numbers);
}

// Return the longest string in an array
function longestString(strings) {
  let wordLngth = 0
  let str = "";
  for (let i = 0; i<strings.length; i++){
    if (strings[i].length > wordLngth){
      str = strings[i];
      wordLngth = strings[i].length
    }
  }
  return str; 
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  return wordsArr.includes(word)
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}
