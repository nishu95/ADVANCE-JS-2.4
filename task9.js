/*
// call
var obj={num:2}
//var obj2={num:5}

var addtothis=function(a,b,c){
    return this.num + a+b+c;
}

console.log(addtothis.call(obj,2,3,4));

//apply
var arr=[2,3,4];
console.log(addtothis.apply(obj,arr));
//console.log(addtothis.apply(obj2,arr));

// bind
var bound=addtothis.bind(obj);
console.dir(bound);
console.log(bound(2,3,4));

var student={age:20}
var Student=function(){
    console.log(this.age);
}
var bb=Student.bind(student);
bb();
*/

// currying method 1 (by bind method)
var multiply=function(x,y){
    console.log(x*y);
}
multiply(2,3);

var multiplybytwo=multiply.bind(this,2);
multiplybytwo(3);

var multiplybythree=multiply.bind(this,3);
multiplybythree(3);

// currying method 2 (by closure)

var multiply=function(x){
    return function(y){
        console.log(x*y);
    }
}

var multiplybytwo=multiply(2);
multiplybytwo(3);

var multiplybythree=multiply(3);
multiplybythree(3);





