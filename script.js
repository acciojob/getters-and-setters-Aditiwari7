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

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
