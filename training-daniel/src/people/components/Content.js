import { Component } from "react";
import PeopleListComponent from "./PeopleListComponent";
import PersonInputFormComponent from "./PersonInputFormComponent";
import { peopleModel } from "../PeopleApplicationContext";

export class Content extends Component {
  state = {
    people: peopleModel.allPeople(),
  };

  updateList = (fields) => {
    peopleModel.create(
      fields.lastname,
      fields.firstname,
      fields.height,
      fields.gender
    );

    this.setState(peopleModel.allPeople());
  }

  render() {
    return (
      <main>
        <PersonInputFormComponent
          people={this.state.people}
          updateList={this.updateList}
        />
        <PeopleListComponent people={this.state.people} />
      </main>
    );
  }
}
export default Content;
