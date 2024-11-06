import { useContext, useState } from "react";
import { dateFormatter } from "../utils";
import { UserContext } from "./Contexts/User";
import DeleteButton from "./DeleteButton";

const CommentCard = ({ comment }) => {
  const [deleted, setDeleted] = useState(false);
  const { user } = useContext(UserContext);
  return (
    <div className="comment">
      {deleted ? (
        <p>comment has been deleted</p>
      ) : (
        <>
          <h3>{comment.author}</h3>
          <p>{comment.body}</p>
          <p>votes {comment.votes}</p>
          <p>{dateFormatter(comment.created_at)}</p>
          {user === comment.author ? (
            <DeleteButton comment={comment} setDeleted={setDeleted} />
          ) : (
            <p></p>
          )}
        </>
      )}
    </div>
  );
};

export default CommentCard;
