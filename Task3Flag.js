
let XMLHtpRequest = require('xhr2') ;

let xhr = new XMLHtpRequest();

xhr.open( 'GET', 'https://restcountries.com/v3.1/all');
 xhr.onload = function () {

//     // convert the json string response xhr.responseText 
//     // to a javascript object
    // let users = JSON.parse(xhr.responseText);

    // console.log(users);
    
    for (let index in JSON.parse(xhr.responseText)) {
         console.log(JSON.parse(xhr.responseText)[index].flag);
    }
 }

// send the http request
xhr.send();