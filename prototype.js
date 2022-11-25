function student(name, subject, address) {
    this.name = name;
    this.subject = subject;
    this.address = address;
}
var st1 = new student("Merlins", "Angular", "Thanjavur");
console.log(st1);
student.prototype.getName = function () {
    return this.name;
}
student.prototype.getAddress = function () {
    return this.address;
}
student.prototype.grades ="A";