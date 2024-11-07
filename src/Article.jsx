import { useEffect, useState } from "react";
import { getArticleById, getCommentsByArticleId } from "../api/api";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import CommentAdder from "./AddComment";
import ErrorPage from "./ErrorPage";
import ArticleContainer from "./ArticleContainer";

const Article = () => {
  const [article, setArticle] = useState("");
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    getArticleById(article_id)
      .then((articleData) => {
        setArticle(articleData);
        return getCommentsByArticleId(article_id);
      })
      .then((commentsData) => {
        setComments(commentsData);
        setIsLoading(false);
      })
      .catch((res) => {
        console.log(res);
        setErrorMsg(res.response.data.msg);
        setIsLoading(false);
      });
  }, [article_id]);

  if (errorMsg) {
    console.log(errorMsg);
    return <ErrorPage msg={errorMsg} />;
  }

  return (
    <main className="main-article-container">
      {" "}
      {isLoading ? (
        <p>Loading...</p>
      ) : errorMsg.length ? (
        <ErrorPage msg={errorMsg} />
      ) : (
        <ArticleContainer article={article} setArticle={setArticle} />
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
      <CommentAdder
        article_id={article.article_id}
        comments={comments}
        setComments={setComments}
      />
    </main>
  );
};

export default Article;
