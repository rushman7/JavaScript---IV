// CODE here for your Lambda Classes

class Person {
  constructor(char) {
    this.name = char.name;
    this.age = char.age;
    this.location = char.location;
  }

  speak() {
    return `Hello my name is ${this.name} and I am from ${this.location}.`
  }
}

class Instructor extends Person {
  constructor(char) {
    super(char)
    this.specialty = char.specialty;
    this.favLanguage = char.favLanguage;
    this.catchPhrase = char.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}.`
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}.`
  }

  points(grade) {
    var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    return grade + plusOrMinus * 6
  }
}

class Student extends Person {
  constructor(char) {
    super(char)
    this.previousBackground = char.previousBackground;
    this.className = char.className;
    this.favSubjects = char.favSubjects;
    this.grade = char.grade;
  }

  listsSubjects() {
    return this.favSubjects.map((item) => item)
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`
  }

  sprintChallenge(sprint) {
    return `${this.name} has begun sprint challenge on ${sprint}.`
  }

  graduate(grade) {
    if (grade > 70) {
      return `${this.name}'s grade of ${grade} is above the 70% requirement, they will now graduate!`
    } else {
      return `${this.name}'s grade of ${grade} is below the 70% requirement, please keep studying and try again!`
    }
  }
}

class ProjectManager extends Instructor {
  constructor(char) {
    super(char)
    this.gradClassName = char.gradClassName;
    this.favInstructor = char.favInstructor;
  }

  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`
  }
}

const josh = new Instructor({
  name: 'Josh',
  location: 'Ohio',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const thomas = new Student({
  name: 'Thomas',
  location: 'California',
  age: 31,
  previousBackground: 'Hospitality',
  className: 'CS11',
  favSubjects: ['Html', 'CSS', 'JavaScript'],
  grade: 90
});

const arthur = new ProjectManager({
  name: 'Arthur',
  location: 'New York',
  age: 25,
  gradClassName: 'CS11',
  favInstructor: 'Josh Knell'
});

console.log(josh.demo('React'));
console.log(josh.grade(thomas, 'React'));
console.log(thomas.listsSubjects());
console.log(arthur.debugsCode(thomas, 'React'));
console.log(thomas.grade);
console.log(arthur.points(thomas.grade))
console.log(thomas.graduate(thomas.grade));
