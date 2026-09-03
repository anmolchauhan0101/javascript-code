//normal function

// function add(a,b){
//     return a+b;
// }
// console.log(add(2,4)); 

// callback and high order function

function add(a, b, cb){
    let result = a + b;
    cb(result);
}

add(2, 4, function(val) {
    console.log(val);
});