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