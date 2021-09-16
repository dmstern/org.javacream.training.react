import { Card } from "react-bootstrap";

function PersonComponent(props) {
  if (props.detail) {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={`https://gravatar.com/avatar/98a4a026a024aa8b5${props.person.id}73df1e340fc83d?s=400&d=robohash&r=x`} />
        <Card.Body>
          <Card.Title>
            {props.person.firstname} {props.person.lastname}
          </Card.Title>
          <Card.Text>
            <span>Größe: {props.person.height} </span>
            <span>Geschlecht: {props.person.gender} </span>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }

  return (
    <>
      {props.person.firstname} {props.person.lastname}
    </>
  );
}

export default PersonComponent;
