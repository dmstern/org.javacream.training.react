import Person from "./Person";
import pubsubInstance from "pubsub.js";

class PeopleModel {
  constructor() {
    this.people = [];
    this.counter = 0;
  }

  create(lastname, firstname, height, gender) {
    let person = new Person(lastname, firstname, height, gender, this.counter);
    this.counter++;
    this.people.push(person);
    pubsubInstance.publish("people.add");
    return person;
  }

  findById(id) {
    let foundPeople = this.people.filter((person) => id === person.id);

    if (foundPeople.length) {
      return foundPeople[0];
    }
  }

  findByLastname(lastname) {
    return this.people.filter((person) => lastname === person.lastname);
  }

  allPeople() {
    return this.people;
  }
}

export default PeopleModel;
