// CODE here for your Lambda Classes

class Person {
  constructor(personAttrs) {
    this.name = personAttrs.name;
    this.age = personAttrs.age;
    this.location = personAttrs.location;
  }

  speak() {
    return `Hello my name is ${this.name} and I am from ${this.location}.`
  }
}

class Instructor extends Person {
  constructor(instAttrs) {
    super(instAttrs)
    this.specialty = instAttrs.specialty;
    this.favLanguage = instAttrs.favLanguage;
    this.catchPhrase = instAttrs.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}.`
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}.`
  }
}

class Student extends Person {
  constructor(studentAttrs) {
    super(studentAttrs)
    this.previousBackground = studentAttrs.previousBackground;
    this.className = studentAttrs.className;
    this.favSubjects = studentAttrs.favSubjects;
  }

  listsSubjects() {
    return this.favSubjects.map((item) => item)
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`
  }

  sprintChallenge(sprint) {
    return `${this.name} has begun sprint challenge on ${subject}.`
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
  favSubjects: ['Html', 'CSS', 'JavaScript']
});

console.log(josh.demo('React'));
console.log(josh.grade(thomas, 'React'))
console.log(thomas.listsSubjects())
