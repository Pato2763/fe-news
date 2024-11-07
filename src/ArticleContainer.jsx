import { updateVotes } from "../api/api";
import { dateFormatter } from "../utils";
import { useState } from "react";

const ArticleContainer = ({ article, setArticle }) => {
  const [upVoteToggle, setUpVoteToggle] = useState(false);
  const [downVoteToggle, setDownVoteToggle] = useState(false);

  const updateVotesOptamistic = (vote_increment) => {
    const articleCopy = { ...article };
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
    </main>
  );
};

export default ArticleContainer;
