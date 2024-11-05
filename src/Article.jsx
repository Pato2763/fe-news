import { useEffect, useState } from "react";
import { getArticleById, getCommentsByArticleId } from "../api/api";
import { useParams } from "react-router-dom";
import { dateFormatter } from "../utils";
import CommentCard from "./CommentCard";

const Article = () => {
  const [article, setArticle] = useState("");
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

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
