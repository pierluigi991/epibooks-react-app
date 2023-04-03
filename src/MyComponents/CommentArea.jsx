import { Component } from "react";
import CommentList from "./CommentList";

class CommentArea extends Component {
  stat = {
    comments: "",
  };
  componentDidMount = () => {
    this.FetchComment();
  };
  fetchComment = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MjZjZWY4MWI0MjAwMTM5YjI3ZDkiLCJpYXQiOjE2ODA1MjkxNTcsImV4cCI6MTY4MTczODc1N30.xcCrn-hPyCaecrCSZraKU10zzxzSRHiMFnhhNvegIx0",
        },
      });

      if (response.ok) {
        const data = await response.json();
        this.setState({ comments: data });
        console.log(data);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  render() {
    return <CommentList comments={this.state.comments}></CommentList>;
  }
}
export default CommentArea;
