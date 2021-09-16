import PersonComponent from "./PersonComponent";
import "./PeopleListComponent.scss";

function PeopleListComponent(props) {
  return (
    <div className="PeopleListComponent">
      {props.people.map((person) => (
        <PersonComponent key={person.id} person={person} detail={true} />
      ))}
    </div>
  );
}

export default PeopleListComponent;
