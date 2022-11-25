class Student{
    constructor(name,age,roll){
    this.name =name;
    this.age =age;
    this.roll =roll;
}
School(){
    return("I am"+" "+this.name+" "+"from ABC School");
}
dob(){
    return("My date of birth is"+(2022-this.age));
}
static total(mark1,mark2){
    return(mark1+mark2);
}
}
class Student1 extends Student{
    constructor(name,age,roll,lang,sect){
        super(name,age,roll);
        this.lang = lang;
        this.sect = sect;
    }
}
var Name = new Student("merlins",21,105);
console.log(Name);
console.log(Name.School());
console.log(Name.dob());
console.log(Student.total(90,80))

var Name1 = new Student1("maha", 22,104,"React","A");
console.log(Name1);
console.log(Name1.School());
console.log(Name1.dob());
console.log(Student1.total(80,95));