var identity = {
    name: "Merlins",
    rollno: 105,
    designation: "Trainee",


    Identitycall: function () {
        console.log("My name is Merlins")
    }
}

console.log(identity.name);
console.log(identity.Identitycall());

// Object using this method

function computer(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.mycomputer = function () {
        console.log("My computer is the superfast computer")
    }
}
var comp = new computer("Acer", "Aspire", 50000);
comp.mycomputer();
console.log(comp);

// Object using constructor

var rect = new Object();
rect.length =5;
rect.width=10;
rect.getarea = function(){
    return(this.length*this.width);
};
rect.getperimeter = function(){
    return(2*this.length+2*this.width);
};
console.log("The length of rectangle:",rect.length);
console.log("The length of rectangle:",rect.width);
console.log("The length of rectangle:",rect.getarea());
console.log("The length of rectangle:",rect.getperimeter());
