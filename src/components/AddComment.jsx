import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment = (props) => {
  const [commentObj, setCommentObj] = useState({
    comment: "",
    rate: "1",
    elementId: props.asin,
  });

  const sendComment = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        body: JSON.stringify(commentObj),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MjZjZWY4MWI0MjAwMTM5YjI3ZDkiLCJpYXQiOjE2ODA1MjkxNTcsImV4cCI6MTY4MTczODc1N30.xcCrn-hPyCaecrCSZraKU10zzxzSRHiMFnhhNvegIx0",
        },
      });
      if (response.ok) {
        props.fetchComments();

        setCommentObj({
          comment: "",
          rate: "1",
          elementId: props.asin,
        });
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Form onSubmit={sendComment}>
      <Form.Group className="mb-3" controlId="comment">
        <Form.Label>Commento</Form.Label>
        <Form.Control
          type="text"
          placeholder="Inserisci il commento"
          value={commentObj.comment}
          onChange={(e) => setCommentObj({ ...commentObj, comment: e.target.value })}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="comment">
        <Form.Label>Voto</Form.Label>
        <Form.Select
          value={commentObj.rate}
          onChange={(e) =>
            setCommentObj({
              ...commentObj,
              rate: e.target.value,
            })
          }
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Select>
      </Form.Group>

      <Button type="submit" variant="primary">
        Invia commento
      </Button>
    </Form>
  );
};

export default AddComment;
