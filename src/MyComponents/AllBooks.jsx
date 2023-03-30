import { Component } from "react";

import { Container, Row, Col, Card } from "react-bootstrap";

import books from "../books/fantasy.json";

class AllTheBooks extends Component {
  render() {
    return (
      <Container>
        <h2 className="display-4 pt-5">Le nostre scelte</h2>
        <Row xs="2" md="2" lg="4" className="pt-3 pb-4">
          {books.map((book, index) => (
            <Col key={`Book-${index}`} className="pb-3 px-2">
              <Card className="shadow">
                <Card.Img variant="top" className="img-fluid" id="image-card" src={book.img} />
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
