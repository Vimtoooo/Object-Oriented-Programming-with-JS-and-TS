import { Person } from './person.js';

export class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
    this.grades = [];
  }
  
  getGPA() {
    if (this.grades.length === 0) {
      return 0;
    }
    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    const average = sum / this.grades.length;
    return (average / 25).toFixed(2); // Convert to 4.0 scale
  }
  
  introduce() { return `${super.introduce()}, a ${this.major} student`; }
  addGrade(grade) {
    if (0 <= grade && grade <= 100) {
        this.grades.push(grade);
    } else console.log("Grade must be between 0 and 100");
  }
}