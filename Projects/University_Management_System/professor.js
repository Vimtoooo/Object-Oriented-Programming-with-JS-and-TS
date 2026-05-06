import { Person } from './person.js';

export class Professor extends Person {
  constructor(name, age, department) {
    super(name, age);
    this.department = department;
  }
  
  // Professor-specific method
  teach(course) {
    return `${this.name} is teaching ${course}`;
  }
  
  introduce() { return `Prof. ${this.name} from ${this.department}`; }
}