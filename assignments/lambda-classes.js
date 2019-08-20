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
    this.student.map((subject) => subject.favSubjects)
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`
  }

  sprintChallenge(sprint) {
    return `${this.name} has begun sprint challenge on ${subject}.`
  }
}

