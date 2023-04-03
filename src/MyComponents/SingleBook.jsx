import { Component } from "react";
import { Card, Badge, Button } from "react-bootstrap";
import CommentArea from "./CommentArea ";
class SingleBook extends Component {
  state = {
    selected: false,
    showComments: false,
  };
  handleOnClick = () => {
    this.setState({ selected: !this.state.selected });
  };
  render() {
    const selectedState = {
      border: this.state.selected ? "border border-danger" : "none",
    };
    return (
      <Card onClick={this.handleToggle} className="shadow cardBook">
        <Card.Img variant="top" className="img-fluid" id="cardImg" src={this.props.img} style={selectedState} />
        <Card.Body>
          <Card.Title className="text-truncate">{this.props.title}</Card.Title>
          <Card.Text>
            Prezzo: <Badge bg="secondary">{this.props.price}</Badge> €
          </Card.Text>
          {this.state.showComments && <CommentArea asin={this.props.book.asin} />}

          <Button
            variant="primary"
            className="w-100"
            onClick={() => {
              this.setState({ selected: true, viewComments: !this.state.showComments });
            }}
          >
            Mostra Commenti
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
