import PersonComponent from "./PersonComponent";
import "./PeopleListComponent.scss";
import { logger, peopleModel } from "../PeopleApplicationContext";
import { useState } from "react";

function PeopleListComponent() {
  const [state, setState] = useState({ people: peopleModel.allPeople() });

  logger.subscribe("people.add", () => {
    setState({ people: peopleModel.allPeople() });
  });

  return (
    <div className="PeopleListComponent">
      {state.people.map((person) => (
        <PersonComponent key={person.id} person={person} detail={true} />
      ))}
    </div>
  );
}

export default PeopleListComponent;
