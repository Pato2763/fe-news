import ArticlesList from "./ArticlesList";
import { useParams } from "react-router-dom";

const TopicPage = () => {
  const { topic } = useParams();

  return <ArticlesList topic={topic} />;
};

export default TopicPage;
