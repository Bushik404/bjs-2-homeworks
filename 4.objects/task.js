function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
  }


Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
  if(this.marks === undefined){
    return;
  }else{
    this.marks = [...this.marks,...marksToAdd];
  }
}
Student.prototype.getAverage = function () {
  if( this.marks === undefined || this.marks.length === 0){
    return 0;
  }else{
    return this.marks.reduce((acc ,element) => acc + element ,0) / this.marks.length;
  }
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}
