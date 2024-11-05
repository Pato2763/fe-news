import { useEffect, useState } from "react";
import {
  getArticleById,
  getCommentsByArticleId,
  updateVotes,
} from "../api/api";
import { useParams } from "react-router-dom";
import { dateFormatter } from "../utils";
import CommentCard from "./CommentCard";

const Article = () => {
  const [article, setArticle] = useState("");
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();
  const [upVoteToggle, setUpVoteToggle] = useState(false);
  const [downVoteToggle, setDownVoteToggle] = useState(false);

  useEffect(() => {
    getArticleById(article_id)
      .then((articleData) => {
        setArticle(articleData);
        return getCommentsByArticleId(article_id);
      })
      .then((commentsData) => {
        setComments(commentsData);
        setIsLoading(false);
      });
  }, [article_id]);

  const updateVotesOptamistic = (vote_increment) => {
    const articleCopy = { ...article };
    console.log(articleCopy);
    articleCopy.votes = articleCopy.votes += vote_increment;
    setArticle(articleCopy);
  };

  const upVote = (event) => {
    event.preventDefault();
    if (upVoteToggle) {
      setUpVoteToggle(false);
      updateVotesOptamistic(-1);
      updateVotes(article.article_id, { inc_votes: -1 });
    } else {
      if (downVoteToggle) {
        setDownVoteToggle(false);
        setUpVoteToggle(true);
        updateVotesOptamistic(2);
        updateVotes(article.article_id, { inc_votes: 2 }).then(() => {});
      } else {
        setUpVoteToggle(true);
        updateVotesOptamistic(1);
        updateVotes(article.article_id, { inc_votes: 1 }).then(() => {});
      }
    }
  };

  const downVote = (event) => {
    event.preventDefault();
    if (downVoteToggle) {
      setDownVoteToggle(false);
      updateVotesOptamistic(1);
      updateVotes(article.article_id, { inc_votes: 1 }).then(() => {});
    } else {
      if (upVoteToggle) {
        setDownVoteToggle(true);
        setUpVoteToggle(false);
        updateVotesOptamistic(-2);
        updateVotes(article.article_id, { inc_votes: -2 });
      } else {
        setDownVoteToggle(true);
        updateVotesOptamistic(-1);
        updateVotes(article.article_id, { inc_votes: -1 });
      }
    }
  };

  return (
    <main className="main-article-container">
      {" "}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <section className="article-container">
          <img className="larger-image" src={article.article_img_url} alt="" />
          <h2 className="article-title">
            {article.title} by {article.author}
          </h2>
          <p className="article-body">{article.body}</p>
          <p className="article-date">
            Posted: {dateFormatter(article.created_at)}
          </p>
          <p className="article-votes">Votes: {article.votes}</p>
          <button
            onClick={upVote}
            className={upVoteToggle ? "vote-toggled" : "vote-toggled-off"}
          >
            Up Vote
          </button>
          <button
            onClick={downVote}
            className={downVoteToggle ? "vote-toggled" : "vote-toggled-off"}
          >
            Down Vote
          </button>
        </section>
      )}
      <section className="comments">
        {comments.map((commentElement) => {
          return (
            <CommentCard
              key={commentElement.comment_id}
              comment={commentElement}
            />
          );
        })}
      </section>
    </main>
  );
};

export default Article;
