import ArticleCard from "./ArticleCard";
import { getArticles } from "../api/api";
import { useEffect, useState } from "react";
import ArticleSorter from "./ArticleSorter";
import { useSearchParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import ArticleCardLarge from "./ArticleCardLarge";

const ArticlesList = ({ topic }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const [error, setError] = useState("");

  useEffect(() => {
    const sort_by = searchParams.get("sort_by");
    const order = searchParams.get("order");
    getArticles(topic, sort_by, order)
      .then((articles) => {
        setIsLoading(false);
        setArticles(articles);
      })
      .catch((err) => {
        setError(err.response.data.msg);
      });
  }, [topic, searchParams]);

  if (error.length) {
    return <ErrorPage msg={error} />;
  }

  return (
    <>
      <main className="Home-container">
        <ArticleSorter />
        <section className="article-list">
          {!isLoading ? (
            articles.map((article, index, array) => {
              if (!index) {
                return (
                  <ArticleCardLarge
                    key={article.article_id}
                    article={article}
                  />
                );
              }
              return <ArticleCard key={article.article_id} article={article} />;
            })
          ) : (
            <p>Loading...</p>
          )}
        </section>
      </main>
    </>
  );
};
export default ArticlesList;
