let jsonArray = '{ "numbers" : ["1", "2", "3", "4", "5", "6"]}';
 let jsonObject = JSON.parse(jsonArray);

 let normalArray = jsonObject.numbers;

//  console.log(normalArray);
// for loop
//  for (let i=0; i<=normalArray.length; i++ ){
//     console.log(normalArray[i]);
//  }
// for in loop
//  for (let run in normalArray) {
//     console.log(run);
//     console.log(normalArray[run]);
//  }
// JSON array string
// const jsonArrayString = '{"fruits":["apple","orange","banana","grape","watermelon"]}';

// // Parse the JSON string to get a JavaScript object
// const jsonObject = JSON.parse(jsonArrayString);

// // Access the array from the object
// const normalArray = jsonObject.fruits;

// // Print the resulting normal array
// console.log(normalArray);
//for of loop
// for(newNum of normalArray){
//     console.log(newNum);
// }
normalArray.forEach(element => {
    console.log(element);
});