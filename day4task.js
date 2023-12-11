
// function addTwoNumbers(x, y) {
//     console.log(x + y);
// }

// addTwoNumbers(5, 6);
// function sumOfTwoNum(x,y){
//     return (x+y);

// }
// let x = sumOfTwoNum(3,6);;
// console.log(sumOfTwoNum(3,6));
// console.log(x);

// // nameless functions or anonymous functions
// let addTwoNumbers = function (x, y) {
//     console.log(x + y);
// }

// addTwoNumbers(5, 6);
// let addFunction = function(x,y){
//     return(x+y);

// }
// addFunction(11,22);
// console.log(addFunction(11,22));
// // arrow functions
// let addTwoNumbers = (x, y) => {
//     console.log(x + y);
// }

// addTwoNumbers(5, 6);
// let arrFun = (k,l) => {
//     console.log( k ** l );
// }
// console.log(arrFun(4,3));

// IIFE: Immediately Invoked Function Expression
// ((x, y) => console.log(x + y))(5, 6); // one liner

// (function (x, y) {
//     console.log(x + y);
// })(5, 6);

// ((x,w) =>  console.log(x*w))(4,6);
//  odd numbers of array
  let array1 = [1,2,3,4,5];
  let arr1 = (array) => {
     for(i=0; i<=array.length; i++){
    if (array[i] % 2 !== 0){
        console.log(array[i]);
    }
    
}
 }
 arr1(array1);
//    IIFE
//  (function (array2) { 
//     for(i=0; i<=array2.length; i++){
//     if (array2[i] % 2 !== 0){
//         console.log(array[i]);
//     } }})(array1);

// caps
// let capsOfFirstLet =  (arrw) => {
//     let capword= [];
//     for (let i=0; i<=arrw.length; i++){
//         let word = arrw[i];
//         let capTheArr = word.charAt(0).toUpperCase()+word.slice(1);
//         capword.push(capTheArr);
//     }
// return capword;

// }

// const words =["java", "phython", " javascript", "mysql", "c"];
//  capsOfFirstLet(words);
// console.log(capword);

// let swords = ["name", "person", "age"];
// let ncword =[];
// let cword = (cfword) => {
//     for( let i =0; i<=cfword.length; i++){
//         let nw = cfword[i];
//         let cfw = nw.charat(0).toUppercase+ nw.slice(1);
//         ncword.push(cfw);
//     }
// }
// cword(swords);
// Function to capitalize the first letter of each word in a string array 
let capitalizeFirstLetter = (arr) => {
    const capitalizedArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      const word = arr[i];
      const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      capitalizedArray.push(capitalizedWord);
    }
  
    return capitalizedArray;
  }
  
  // Sample string array
  const wordsArray = ['java', 'phyton', 'javascript', 'database'];
  
  
  const capitalizedArray = capitalizeFirstLetter(wordsArray);
  
  // Display the result
  Console.log(capitalizedArray);

  // Function to capitalize the first letter of each word USING IIFE
// Sample string array
// const wordsArray = ['apple', 'banana', 'cherry', 'date'];

// // IIFE to capitalize the first letter of each word in a string array
// const capitalizedArray = (function (arr) {
//   return arr.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
// })(wordsArray);

// // Display the result
// console.log(capitalizedArray);

  

 


  

  
  