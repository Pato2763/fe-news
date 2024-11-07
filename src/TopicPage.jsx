import { useEffect } from "react";
import ArticlesList from "./ArticlesList";
import { useParams, useSearchParams } from "react-router-dom";

const TopicPage = () => {
  const { topic } = useParams();

  return <ArticlesList topic={topic} />;
};

export default TopicPage;
