import PersonComponent from "./PersonComponent";
import "./PeopleListComponent.scss";
import { peopleModel, peopleService } from "../PeopleApplicationContext";
import { Component } from "react";
import pubsubInstance from "pubsub.js";

class PeopleListComponent extends Component {
  state = { people: [] };

  componentDidMount() {
    this.loadData();
    pubsubInstance.subscribe("people.add", () => {
      this.setState({ people: peopleModel.allPeople() });
    });
  }

  async loadData() {
    let data = await peopleService.getPeople();
    this.setState({ people: data });
  }

  render() {
    return (
      <div className="PeopleListComponent">
        {this.state.people.map((person) => (
          <PersonComponent key={person.id} person={person} detail={true} />
        ))}
      </div>
    );
  }
}

export default PeopleListComponent;
