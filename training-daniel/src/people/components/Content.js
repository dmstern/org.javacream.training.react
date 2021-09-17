import { Component } from "react";
import PeopleListComponent from "./PeopleListComponent";
import PersonInputFormComponent from "./PersonInputFormComponent";

export class Content extends Component {
  render() {
    return (
      <main>
        <PersonInputFormComponent />
        <PeopleListComponent />
      </main>
    );
  }
}
export default Content;
