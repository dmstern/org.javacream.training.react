import { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { peopleModel } from "../PeopleApplicationContext";
import pubsubInstance from "pubsub.js";

class PersonInputFormComponent extends Component {
  state = {
    fields: {
      lastname: "",
      firstname: "",
      gender: "",
      height: 0,
    },
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    let fields = this.state.fields;
    peopleModel.create(
      fields.lastname,
      fields.firstname,
      fields.height,
      fields.gender
    );
    pubsubInstance.publish("people.add");
  };

  handleChange = (event) => {
    let target = event.target;
    let result = this.state.fields;
    result[target.name] = target.value;
    this.setState({ fields: result });
  };

  render() {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <Form.Group>
          <Form.Control
            placeholder="Lastname"
            name="lastname"
            value={this.state.fields.lastname}
            onChange={this.handleChange}
          ></Form.Control>
          <Form.Control
            placeholder="Firstname"
            name="firstname"
            value={this.state.fields.firstname}
            onChange={this.handleChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            placeholder="m|f|x"
            name="gender"
            value={this.state.fields.gender}
            onChange={this.handleChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            placeholder="123"
            name="height"
            value={this.state.fields.height}
            onChange={this.handleChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Button type="submit">Create Person</Button>
        </Form.Group>
      </Form>
    );
  }
}

export default PersonInputFormComponent;
