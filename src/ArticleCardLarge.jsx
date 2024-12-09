import { Link } from "react-router-dom";
import { dateFormatter } from "../utils";

const ArticleCardLarge = ({ article }) => {
  return (
    <Link to={`/article/${article.article_id}`}>
      <section className="article-card">
        <img className="article-img" src={article.article_img_url} alt="" />
        <p>{article.title}</p>
        <p>Posted: {dateFormatter(article.created_at)}</p>
      </section>
    </Link>
  );
};

export default ArticleCardLarge;
