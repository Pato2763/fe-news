import { useState } from "react";
import { postComment } from "../api/api";

const CommentAdder = ({ article_id, comments, setComments }) => {
  const [body, setBody] = useState("");
  const [posting, setPosting] = useState(false);
  const [commentChecker, setCommentChecker] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (body.length !== 0) {
      setCommentChecker(false);
      setPosting(true);
      postComment(article_id, body).then((data) => {
        const commentsCopy = comments.map((comment) => {
          return { ...comment };
        });
        const comment = data.newComment;
        commentsCopy.push(comment);
        setComments(commentsCopy);
        setPosting(false);
      });
    } else {
      setCommentChecker(true);
    }
  };

  const handleChange = (event) => {
    setBody(event.target.value);
  };

  return (
    <>
      {posting ? (
        <p>Your Comment is Posting...</p>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              New Comment
              <input value={body} onChange={handleChange} />
            </label>
            <button type="submit">Post Comment</button>
          </form>
          {commentChecker ? <p>Can't submit an empty comment</p> : <p></p>}
        </div>
      )}
    </>
  );
};

export default CommentAdder;
