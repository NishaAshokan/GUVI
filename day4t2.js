
// // function array(added) {
// //     let value = 0;
// //     for (let i=0; i<=added.length; i++){
       
// //         value += added[i];

// //     }
// //     return sumedArray;

// // }
// // let sum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // let result = array(sum);
// // console.log(value);
// // Function to sum all numbers in an array
// // function sumArray(numbers) {
// //     let sum = 0;
// //     for (let i = 0; i < numbers.length; i++) {
// //       sum += numbers[i];
// //     }
// //     return sum;
// //   }
  
// //   // Example usage
// //   const numbersArray = [1, 2, 3, 4, 5];
// //   const result = sumArray(numbersArray);
  
// //   // Display the result
// //   console.log("Sum:", result);
//   let arrowfunction = (addition) =>{
//     let total = 0;
//     for(let i=0; i <= addition.length; i++){
//         total = total + addition[i];
//     }
//     return total;
//   }
//   let given = [ 3, 7, 8, 9];
//   arrowfunction(given);
//   console.log(total);

// // Sample array
// const numbersArray = [1, 2, 3, 4, 5];

// // IIFE to sum all values in the array
// const sum = (function (arr) {
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     result += arr[i];
//   }
//   return result;
// })(numbersArray);


// console.log("Sum:", sum);

// const numbersArray = [1, 17, 21, 45, 78, 43, 51];

// const getPrimeNumbersArrow = (arr) => {
//   return arr.filter((num) => {
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return num > 1;
//   });
// };

// const primeNumbersArrow = getPrimeNumbersArrow(numbersArray);
// console.log("Prime Numbers (Arrow Function):", primeNumbersArrow);

// // const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // const getPrimeNumbersAnonymous = function(arr) {
// //   return arr.filter(function(num) {
// //     for (let i = 2; i < num; i++) {
// //       if (num % i === 0) {
// //         return false;
// //       }
// //     }
// //     return num > 1;
// //   });
// // };

// // const primeNumbersAnonymous = getPrimeNumbersAnonymous(numbersArray);
// // console.log("Prime Numbers (Anonymous Function):", primeNumbersAnonymous);
// const numbersArray = [13, 5, 9, 6, 0, 47, 65];

// const primeNumbersIIFE = (function(arr) {
//   return arr.filter(function(num) {
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return num > 1;
//   });
// })(numbersArray);

// console.log("Prime Numbers (IIFE):", primeNumbersIIFE);
// // palindromes 
// const palindromeArray = [121, 123, 1331, 454, 12321];

// const palindromicNumbersIIFE = (function(arr) {
//   return arr.filter(function(num) {
//     const numString = num.toString();
//     const reversedString = numString.split('').reverse().join('');
//     return numString === reversedString;
//   });
// })(palindromeArray);

// console.log("Palindromic Numbers (IIFE):", palindromicNumbersIIFE);


// const anonymousArray = [121, 123, 1331, 454, 12321];

// const getPalindromicNumbersAnonymous = function(arr) {
//   return arr.filter(function(num) {
//     const numString = num.toString();
//     const reversedString = numString.split('').reverse().join('');
//     return numString === reversedString;
//   });
// };

// const palindromicNumbersAnonymous = getPalindromicNumbersAnonymous(anonymousArray);
// console.log("Palindromic Numbers (Anonymous Function):", palindromicNumbersAnonymous);




// const wordArray = ["why", "wow", "what", "pop", "racecar"];

// const getPalindromesArrow = (arr) => {
//   return arr.filter((word) => {
//     const reversed = word.split("").reverse().join("");
//     return word === reversed;
//   });
// };

// const palindromesArrow = getPalindromesArrow(wordArray);
// console.log("Palindromes (Arrow Function):", palindromesArrow);
// //sorted array
// const arr1 = [1, 3, 5];
// const arr2 = [2, 4, 6,];

// const medianIIFE = (function(array1, array2) {
//   const mergedArray = array1.concat(array2);
//   const sortedArray = mergedArray.sort((a, b) => a - b);
//   const length = sortedArray.length;

//   if (length % 2 === 0) {
//     const midIndex1 = length / 2 - 1;
//     const midIndex2 = length / 2;
//     return (sortedArray[midIndex1] + sortedArray[midIndex2]) / 2;
//   } else {
//     const midIndex = Math.floor(length / 2);
//     return sortedArray[midIndex];
//   }
// })(arr1, arr2);

 console.log("Median (IIFE):", medianIIFE);

 const arrayWithDuplicates = [5, 2, 8, 1, 3, 2, 5, 8, 3, 1];

const sortedArrayAnonymous = function(arr) {
  const uniqueArray = arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });

  return uniqueArray.slice().sort((a, b) => a - b);
};

const resultAnonymous = sortedArrayAnonymous(arrayWithDuplicates);

console.log("Original Array:", arrayWithDuplicates);
console.log("Sorted Array without Duplicates (Anonymous Function):", resultAnonymous);
// const arrayWithDuplicates = [5, 2, 8, 1, 3, 2, 5, 8, 3, 1];

// const sortedArrayIIFE = (function(arr) {
//   const uniqueArray = arr.filter((value, index, self) => {
//     return self.indexOf(value) === index;
//   });

//   return uniqueArray.slice().sort((a, b) => a - b);
// })(arrayWithDuplicates);

// console.log("Original Array:", arrayWithDuplicates);
// console.log("Sorted Array without Duplicates (IIFE):", sortedArrayIIFE);
const arrayWithDuplicates = [5, 2, 8, 1, 3];
const k = 2; // Number of rotations

const sortedArrayIIFE = (function(arr, rotations) {
  const rotatedArray = arr.slice();
  for (let i = 0; i < rotations; i++) {
    const firstElement = rotatedArray.shift();
    rotatedArray.push(firstElement);
  }

  return rotatedArray.slice().sort((a, b) => a - b);
})(arrayWithDuplicates, k);

console.log("Original Array:", arrayWithDuplicates);
console.log(`Sorted Array after ${k} Rotations (IIFE):`, sortedArrayIIFE);
