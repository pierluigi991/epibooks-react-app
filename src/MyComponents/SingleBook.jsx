import { Component } from "react";
import { Card, Badge } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  handleToggle = () => {
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
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
