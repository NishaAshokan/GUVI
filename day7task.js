
const XMLHttpRequest = require ("xhr2");
let xhr = new XMLHttpRequest();
xhr.open("GET",'https://restcountries.com/v3.1/all');
xhr.responseType = "json";
xhr.send();
xhr.onload= function(){
    let countries = xhr.response;
    console.log(countries.filter(country =>{
        if(country.region == "Asia"){
        return true;
    }   
}).map(country =>country.name.common));
}
Xhr.onload = function() {
    let countries = xhr.response;
    console.log(countries.filter(country =>{
        if(country.population >= 200000){
            return true;
        }
    }).map(country => country.name.commom));
    }
    xhr.onload = function() {
        let countries = xhr.responseType;
        let populations = countries.map(countryPopulation => {
            return country.population;
        });
        function population(value){
            return CountQueuingStrategy.population;
        }
        let totalpopulation = country.map(population);
        console.log(totalpopulation);
        console.log(totalpopulations.reduce(previousValue + currentValue));
    }


const XMLHttpRequest = require("xhr2");
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");


xhr.onload = function(){
 const conutries =JSON.parse(xhr.response);
 conutries.forEach(country => {
    if(Object.keys(country.currencies).includes("USD"))
    console.log(country.name.common);
 });
// area
conutries.forEach(country => {
    console.log(country.capital);
});
conutries.forEach(country => {
    console.log(country.capital);
});
conutries.forEach(country => {
    console.log(country.name.flag);
});
// }
xhr.send();