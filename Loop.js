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
// normalArray.forEach(element => {
//     console.log(element);
// });

// let jsonResume = '{
//     "Name" : "Madhinishanthi",
//     "Age " : "23" 

// }'; 
// let jsonObject = JSON.parse(jsonResume);
// let normalResume = jsonObject.Name;
// console.log(normalResume);

const resumeData = {
    "personalInfo": {
      "FirstName": "Madhinishanthi",
      "LastName": "Ashokan",
      "Email": "madhinishaashokan207@gmail.com",
      "Phone": "6938958585",
      "Address": "12,Street, city, district, state, Country"
    },
    "education": [
      {
        "Degree": "B.TECH BIOTECHNOLOGY",
        "School": "SCHOOL OF SOMETHING",
        "GraduationYear": 2021
      }
    ],
    "Experience": [
      {
        "Position": "SPI ENGINEER",
        "Company": "GHJNM.",
        "StartDate": "JULY 2023",
        "EndDate": "Present",
        "Responsibilities": [
          "Working in smart plant instrumentation",
          "working in different module",
          "Datasheets"
        ]
      }
    ],
    "skills": [
      "JavaScript",
      "Java",
      "Mysql",
      "React.js",
      "Node.js",
      "HTML",
      "CSS",
      "Git"  
    ],
    "languages": [
      "English (Fluent)",
      "Japanese (Beginner)"
    ]
  };
  
  // Print the resume data
  console.log(JSON.stringify(resumeData, null, 2));
  