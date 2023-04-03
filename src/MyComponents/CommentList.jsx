import { ListGroup } from "react-bootstrap";

const CommentList = (props) => {
  const listGroupComments = [...props.comments];
  console.log();

  return (
    <ListGroup className="mb-3">
      {listGroupComments.map((comment) => {
        return <ListGroup.Item>{comment.comment}</ListGroup.Item>;
      })}
    </ListGroup>
  );
};

export default CommentList;
