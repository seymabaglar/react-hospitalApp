import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const AppointmentList = ({ apps }) => {
  console.log(apps);
  return (
    <Container className="p-2">
      <h3
        className="display-6 mb-3 doctors"
        style={{ color: " rgb(12, 67, 71)" }}>
        Appointment List
      </h3>
      <div>
        <Row>
          <Col></Col>
        </Row>
      </div>
    </Container>
  );
};

export default AppointmentList;
