import PeopleModel from "./model/PeopleModel";
import Person from "./model/Person";

let applicationTitle = "PEOPLE";
let applicationFooter = "(c) d_mstern";
let peopleModel = new PeopleModel();
peopleModel.create("Galindo", "Antonio", 183, "male");
peopleModel.create("Morgenstern", "Daniel", 170, "female");
peopleModel.create("Ünal", "Aylin", 190, "male");
let user = new Person("Mustermann", "Max", 180, "diverse");

export { peopleModel, applicationTitle, applicationFooter, user };
