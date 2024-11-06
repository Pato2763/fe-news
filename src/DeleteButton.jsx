import { useState } from "react";
import { deleteComment } from "../api/api";

const DeleteButton = ({ comment, setDeleted }) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = (event) => {
    event.preventDefault();
    setDeleting(true);
    deleteComment(comment.comment_id).then(() => {
      setDeleting(false);
      setDeleted(true);
    });
  };

  return deleting ? (
    <p>deleting...</p>
  ) : (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeleteButton;
