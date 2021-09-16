import { applicationTitle, user } from "../PeopleApplicationContext";
import PersonComponent from "./PersonComponent";

function People() {
  return (
    <header>
      <h1>{applicationTitle}</h1>
      angemeldet: <PersonComponent person={user} detail={false} />
    </header>
  );
}

export default People;
