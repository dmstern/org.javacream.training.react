import PeopleModel from "./model/PeopleModel";
import Person from "./model/Person";
import PeopleService from "./services/PeopleService";

const url = "http://h2908727.stratoserver.net:8080/people";
const applicationTitle = "PEOPLE";
const applicationFooter = "(c) d_mstern";
const peopleModel = new PeopleModel();
const peopleService = new PeopleService();
peopleService.getPeople().then((people) => {
  peopleModel.people = people;
});

const user = new Person("Mustermann", "Max", 180, "diverse");

export {
  peopleModel,
  applicationTitle,
  applicationFooter,
  user,
  peopleService,
  url,
};
