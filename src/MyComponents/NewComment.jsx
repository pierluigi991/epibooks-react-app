import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function NewComment() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="recensione">
        <Form.Label>Recensione:</Form.Label>
        <Form.Control type="text" placeholder="Write Here" />

        <Form.Label>Valid:</Form.Label>
        <Form.Control type="number" placeholder="Valuta (da 1 a 5)" />
      </Form.Group>

      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default NewComment;
