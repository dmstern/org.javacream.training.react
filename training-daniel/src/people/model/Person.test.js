import Person from "./Person";

test("Creates Test Person", () => {
  let p = new Person("Morgenstern", "Daniel", 183, "male");
  expect(p.lastname).toBe("Morgenstern");
  expect(p.firstname).toBe("Daniel");
  expect(p.height).toBe(183);
  expect(p.gender).toBe("male");
});
