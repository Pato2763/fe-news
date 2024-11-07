import ArticleCard from "./ArticleCard";
import { getArticles } from "../api/api";
import { useEffect, useState } from "react";
import ArticleSorter from "./ArticleSorter";
import { useSearchParams } from "react-router-dom";

const ArticlesList = ({ topic }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const sort_by = searchParams.get("sort_by");
    const order = searchParams.get("order");
    getArticles(topic, sort_by, order).then((articles) => {
      setIsLoading(false);
      setArticles(articles);
    });
  }, [topic, searchParams]);

  return (
    <>
      <ArticleSorter />
      <main className="article-list">
        {!isLoading ? (
          articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </>
  );
};
export default ArticlesList;
