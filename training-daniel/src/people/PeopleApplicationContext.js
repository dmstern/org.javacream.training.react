import { Logger } from "./components/Logger";
import PeopleModel from "./model/PeopleModel";
import Person from "./model/Person";

let applicationTitle = "PEOPLE";
let applicationFooter = "(c) d_mstern";
let peopleModel = new PeopleModel();
let logger = new Logger();
peopleModel.create("Galindo", "Antonio", 190, "male");
peopleModel.create("Morgenstern", "Daniel", 183, "male");
peopleModel.create("Ünal", "Aylin", 170, "female");
let user = new Person("Mustermann", "Max", 180, "diverse");

export { peopleModel, applicationTitle, applicationFooter, user, logger };
