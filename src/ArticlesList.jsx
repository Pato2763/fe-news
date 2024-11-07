import ArticleCard from "./ArticleCard";
import { getArticles } from "../api/api";
import { useEffect, useState } from "react";

const ArticlesList = ({ topic }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles(topic).then((articles) => {
      setIsLoading(false);
      setArticles(articles);
    });
  }, [topic]);

  return (
    <main className="article-list">
      {!isLoading ? (
        articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};
export default ArticlesList;
