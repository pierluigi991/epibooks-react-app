import { Container, Row, Col } from "react-bootstrap";
const MyFooter = () => (
  <Container fluid className="MyFooter">
    <Row pt={5}>
      <Col>Servizio clienti</Col>
      <Col>Contattaci</Col>
      <Col>Spedizioni</Col>
    </Row>
  </Container>
);
export default MyFooter;
