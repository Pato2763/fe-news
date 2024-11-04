const ArticleCard = ({ article }) => {
  return (
    <section className="article-card">
      <img className="article-img" src={article.article_img_url} alt="" />
      <p>{article.title}</p>
    </section>
  );
};
export default ArticleCard;
