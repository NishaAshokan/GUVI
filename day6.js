//
class Person {
    constructor(name, mail, phone, degree){
        this.name = name;
        this.mail = mail;
        this.phone = phone;
        this.degree = degree;
    }
    getDetails(){
        console.log(`Hello! ${this.name}, your mailid is ${this.mail}, and phone no is ${this.phone}, and qualification is ${this.degree}`);

    }
}
let Person1= new Person("Madhi", "asdf@sdfg", "2345678", "B.TECH");
 Person1.getDetails();
console.log(Person1);

class uber{
    constructor(day1, day2, day3){
        this.day1 = day1;
        this.day2 = day2;
        this.day3 = day3;
    }
    adduberPrice(){
        console.log(this.day1 + this.day2 + this.day3);
    }
}

let Price= new uber(4500, 5480, 3870);
console.log(Price);
Price.adduberPrice(); 
// movie

class movie{
    constructor(title, studio, rating= "PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    getMorningShow(){
        console.log(`moringshow MOVIE NAME : ${this.title} , present studio by ${this.studio}, with rating of ${this.rating}`);

    }
   
}

let movies = [];
movies.push(new movie("KMI", "DREAM STUDIO", "PG13"));
movies.push(new movie("OKK", "11 STUDIO", "PR"));
movies.push(new movie("LEO", "ESC STUDIO"));
movies.push(new movie("casino royale", "Eon production", "PG13"));

console.log(movies);

for(let todayshow of movies){
    todayshow.getMorningShow();
}
// circle
class circle{
    constructor(color ="Red", radius ="1.0"){
        
        switch (arguments.length){
         case 0:
         this.color = color;
        this.radius = radius;
        case 1: 
        this.color = color;
        this.radius = radius;
        case 2:
            this.color = color;
        this.radius = radius;
        }
    }
    getradius(){
        console.log(`radius is ${this.radius}`);
    }
    getcolor(){
        console.log(`color of circle is ${this.radius}`);
    }
    toarray(){
        console.log(`"circle[color = ${this.color}, radius = ${this.radius}]"`);
    }
}

// let circle0 = new circle();
// let circle1 = new circle("BLUE");
// let circle2 = new circle("BLACK", "3.7");
// console.log(circle1);
let circles = [];
circles.push(new circle("pink", "6.2"));
circles.push(new circle("green"));
circles.push(new circle("white", "1.8"));
circles.push(new circle("peach", "4.6"));

for (newcircle of circles){
    newcircle.getradius();
    newcircle.getcolor();
    newcircle.toarray();
}

