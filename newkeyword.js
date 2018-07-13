function car(make,model,year,owner){ 	//parameters are passed 
	this.make=make;
	this.model=model;
	this.year=year;
	this.owner=owner;	//new object is created and then parsed
}




// console.log(mycar1)
// console.log(mycar2)

function person(name,email,age){
	this.name=name;
	this.email=email;
	this.age=age;
}

var person1= new person("Param", "jogi1@google.com", 25);
var person2= new person("Kushal", "jogi2@gogole.com", 26);
var mycar1= new car("Toyota", "Camry", 2007,person1);
var mycar2= new car("Lexus", "LS100", 2010, person2);

console.log(mycar1)