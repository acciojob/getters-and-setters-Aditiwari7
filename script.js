//complete this code
class Person {
	constructor(name, age){
		this.Name = name;
		this.Age = age;
	}

	get name(){
		return this.Name;
	}

	set age(){
		return this.Age;
	}
}

class Student extends Person {
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	teach() {
		console.log(`${this.name} is teaching`);
	}
}

const person = new Person("John", 25);
console.log(person.name); // "John"
person.age = 30;

const student = new Student("Jane", 20);
console.log(student.name); // "Jane"
student.study(); // "Jane is studying"

const teacher = new Teacher("Bob", 35);
console.log(teacher.name); // "Bob"
teacher.teach(); // "Bob is teaching"

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
