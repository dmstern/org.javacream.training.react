import "./App.scss";
import PeopleApp from "./people/components/PeopleApp";
import { Container, Col, Row } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          {" "}
          <PeopleApp />
        </Col>
      </Row>
    </Container>
    // <div className="App">

    // </div>
  );
}

export default App;
