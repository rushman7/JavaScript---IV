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