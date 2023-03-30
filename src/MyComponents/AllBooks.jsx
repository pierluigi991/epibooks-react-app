import { Component } from "react";

import { Container, Row, Col, Card } from "react-bootstrap";

import books1 from "../books/fantasy.json";
import books2 from "../books/history.json";
import books3 from "../books/horror.json";
import books4 from "../books/romance.json";

class AllTheBooks extends Component {
  render() {
    return (
      <Container className="pb-5">
        <h2 className="display-4 pt-5"> Fantasy:</h2>
        <Row className="pt-3 md-4">
          {books1.map((book, index) => (
            <Col key={`Fantasy-${index}`} className="pb-3 px-2">
              <Card className="shadow cardBook">
                <Card.Img variant="top" className="img-fluid" id="cardImg" src={book.img} />
                <Card.Body>
                  <Card.Title className="text-truncate">{book.title}</Card.Title>
                  <Card.Text>Prezzo: {book.price} €</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <h2 className="display-4 pt-5"> History:</h2>
        <Row className="pt-3 md-4">
          {books2.map((book, index) => (
            <Col key={`History-${index}`} className="pb-3 px-2">
              <Card className="shadow cardBook">
                <Card.Img variant="top" className="img-fluid" id="cardImg" src={book.img} />
                <Card.Body>
                  <Card.Title className="text-truncate">{book.title}</Card.Title>
                  <Card.Text>Prezzo: {book.price} €</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <h2 className="display-4 pt-5"> Horror:</h2>
        <Row className="pt-3 md-4">
          {books3.map((book, index) => (
            <Col key={`Horror-${index}`} className="pb-3 px-2">
              <Card className="shadow cardBook">
                <Card.Img variant="top" className="img-fluid" id="cardImg" src={book.img} />
                <Card.Body>
                  <Card.Title className="text-truncate">{book.title}</Card.Title>
                  <Card.Text>Prezzo: {book.price} €</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <h2 className="display-4 pt-5"> Romance:</h2>
        <Row className="pt-3 md-4">
          {books4.map((book, index) => (
            <Col key={`Romance-${index}`} className="pb-3 px-2">
              <Card className="shadow cardBook">
                <Card.Img variant="top" className="img-fluid" id="cardImg" src={book.img} />
                <Card.Body>
                  <Card.Title className="text-truncate">{book.title}</Card.Title>
                  <Card.Text>Prezzo: {book.price} €</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
