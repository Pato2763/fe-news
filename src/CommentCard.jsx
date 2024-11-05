import { dateFormatter } from "../utils";

const CommentCard = ({ comment }) => {
  return (
    <div className="comment">
      <h3>{comment.author}</h3>
      <p>{comment.body}</p>
      <p>votes {comment.votes}</p>
      <p>{dateFormatter(comment.created_at)}</p>
    </div>
  );
};

export default CommentCard;
