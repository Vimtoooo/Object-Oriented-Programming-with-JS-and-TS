import { Person } from './person.js';
import { Student } from './student.js';
import { Professor } from './professor.js';

// Create people
const student1 = new Student('Alice', 20, 'Computer Science');
const prof1 = new Professor('Dr. Johnson', 50, 'Mathematics');

console.log(student1.introduce()); // "Hi, I'm Alice, a Computer Science student"
console.log(prof1.introduce())     // "Prof. Dr. Johnson from Mathematics"

student1.addGrade(85);
student1.addGrade(90);
student1.addGrade(95);
console.log(`${student1.name}'s GPA: ${student1.getGPA()}`); // ~3.6

student1.addGrade(105); // Should log: "Grade must be between 0 and 100"