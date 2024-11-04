import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <Link to={`/article/${article.article_id}`}>
      <section className="article-card">
        <img className="article-img" src={article.article_img_url} alt="" />
        <p>{article.title}</p>
      </section>
    </Link>
  );
};
export default ArticleCard;
