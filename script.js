// let firstTask = function (callback) {
//     console.log('starting first task');
//     setTimeout(() => {
//         console.log('first task is completed');
//         callback();
//     }, 2000);   
// }
// let print10 = function(number ,callback){
//     console.log(10);
//     setTimeout(function () {
//         countdown(number - 1, callback);
//       }, 1000);
  
//     callback()
// }
let print10 = function(callback){
    setTimeout(()=>{
        console.log(10);
        callback();
    },1000 );
}
let print9 = function(callback){
    setTimeout(()=>{
        console.log(9);
        callback();
    },1000 );
}
let print8 = function(callback){
    setTimeout(()=>{
        console.log(8);
        callback();
    },1000 );
}
let print7 = function(callback){
    setTimeout(()=>{
        console.log(7);
        callback();
    },1000 );
}
let print6 = function(callback){
    setTimeout(()=>{
        console.log(6);
        callback();
    },1000 );
}
let print5 = function(callback){
    setTimeout(()=>{
        console.log(5);
        callback();
    },1000 );
}
let print4 = function(callback){
    setTimeout(()=>{
        console.log(4);
        callback();
    },1000 );
}
let print3 = function(callback){
    setTimeout(()=>{
        console.log(3);
        callback();
    },1000 );
}
let print2 = function(callback){
    setTimeout(()=>{
        console.log(2);
        callback();
    },1000 );
}
let print1 = function(callback){
    setTimeout(()=>{
        console.log(1);
        callback();
    },1000 );
}
// let print9 = function(callback){
//     console.log(9);
//     callback()
// }
// let print8 = function(callback){
//     console.log(8);
//     callback()
// }
// let print7 = function(callback){
//     console.log(7);
//     callback()
// }
// let print6 = function(callback){
//     console.log(6);
//     callback()
// }
// let secondTask = function (callback) {
//     console.log('starting second task');
//     setTimeout(() => {
//         console.log('second task is completed');
//         callback();
//     }, 2000);
// }

// let thirdTask = function (callback) {
//     console.log('starting third task');
//     setTimeout(() => {
//         console.log('third task is completed');
//         callback();
//     }, 2000);
// }

// callback hell or pain of callback
print10(function () {
    print9(function () {
        print8(function () {
            print7(function (){
                print6(function (){
                    print5(function(){
                        print4(function(){
                            print3(function(){
                                print2(function(){
                                    print1(function(){
                                       console.log("Happy Independence Day!");                                    
                                    });
                                });
                            });
                        });
                    });
                    
                });
            });
           
        });
    });
});