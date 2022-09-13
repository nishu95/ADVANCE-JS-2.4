
// this inside global scope
this.table='window table';
console.log(window.table);

this.garage={
    table:'garage table'
};
console.log(this.garage.table);


// this inside an object

let johnRoom={
    table:'John Table'
};
console.log(johnRoom.table);   // can't use this keyword here without an error

// this inside method
let johnsRoom={
    table:'John Table',
    cleanTable(){
        console.log('cleaninng'+this.table);
    }
};
johnsRoom.cleanTable();


// this inside a function

this.table='window table';

this.garage={
    table:'garage table'
};

let johnasRoom={
    table:'John Table',
};


var cleanTable=function(soap){
    console.log('cleaninng '+ this.table +' using '+soap);
}
cleanTable.call(this,'vim');   // output will be 'cleaning window table using vim'
cleanTable.call(this.garage,'vim');   // 'cleaning garage table using vim'
cleanTable.call(johnasRoom,'vim');    // 'cleaning john table using vim'


// this inside an inner function
this.table='window table';

this.garage={
    table:'garage table'
};

let johnasRoom={
    table:'John Table',
};


var cleanTable=function(soap){
    var innerFunction=function(_soap){
        console.log('cleaninng '+ this.table +' using '+soap);
    }
    innerFunction(soap);
}   // now code here will make problem

// 3 solutions

//1
var cleanTable=function(soap){
    let that=this;
    var innerFunction=function(_soap){
        console.log('cleaninng '+ that.table +' using '+soap);
    }
    innerFunction(soap);
}


//2
var cleanTable=function(soap){
    var innerFunction=function(_soap){
        console.log('cleaninng '+ this.table +' using '+soap);
    }
    innerFunction.call(this,soap);
    // or     innerFunction.bind(this)(soap);

}

//3
var cleanTable=function(soap){
    var innerFunction= (_soap) => {
        console.log('cleaninng '+ this.table +' using '+soap);
    }
    innerFunction(soap);

}



cleanTable.call(this,'vim');   // output will be 'cleaning window table using vim'
cleanTable.call(this.garage,'vim');   // 'cleaning garage table using vim'
cleanTable.call(johnasRoom,'vim');    // 'cleaning john table using vim'


// this inside constructor

this.table='window table';

this.garage={
    table:'garage table'
};


let createRoom=function(naam){
    this.table=naam + 'ka table';
}
const jillRoom=createRoom('jill');
const johnRoom=createRoom('john');


const cleanTable=function(soap){
    console.log('cleaninng '+ this.table +' using '+soap);
}


cleanTable.call(this,'vim');  
cleanTable.call(this.garage,'vim');   
cleanTable.call(johnRoom,'vim');    
cleanTable.call(jillRoom,'vim');    


// this inside class

class createRoom{
    constructor(naam){
        this.table=naam+'ka table';
    }
}


class student{
    constructor(name,age,phone,marks){
        this.name=name;
        this.age=age;
        this.phone=phone;
        this.marks=marks;
    }
    static count=0;

    register(){
        console.log('student is registered');
        student.count+=1;

    }

    eligible(){
        if(this.marks>=40){
            console.log(eligible);
        }else{
            console.log('not eligible')
        }
    }

    static numberOfKids(){
        return student.count;
    }
}

var a=new student('gillu',20,20201111,90);
a.register();
var b=new student('pillu',22,202111,40);
b.register();
var c=new student('tillu',19,201111,77);
c.register();
var d=new student('nillu',33,202011,55);
d.register();
var e=new student('shillu',55,1111,22);
e.register();
console.log(student.numberOfKids());
