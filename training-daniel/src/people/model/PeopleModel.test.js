import PeopleModel from "./PeopleModel";

test("create a person", () => {
  let people = new PeopleModel();
  let person = people.create("Morgenstern", "Daniel", 183, "male");
  expect(person.lastname).toBe("Morgenstern");
});

test("find a person by lastname", () => {
  let people = new PeopleModel();
  people.create("Morgenstern", "Daniel", 183, "male");
  let person = people.findById(0);
  expect(person).not.toBe(undefined);
  expect(person.lastname).toBe("Morgenstern");
});

test("get all people", () => {
  let people = new PeopleModel();
  people.create("Morgenstern", "Daniel", 183, "male");
  people.create("Morgenstern", "Daniel", 183, "male");
  let allPeople = people.allPeople();
  expect(allPeople.length).toBe(2);
});
