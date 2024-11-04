import { useEffect, useState } from "react";
import { getArticleById } from "../api/api";
import { useParams } from "react-router-dom";
import { dateFormatter } from "../utils";

const Article = () => {
  const [article, setArticle] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((articleData) => {
      setArticle(articleData);
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
    </main>
  );
};

export default Article;
