import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../api/api";

const Header = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then(({ topics }) => {
      setTopics(topics);
    });
  }, []);

  return (
    <header>
      <Link to={"/"}>
        <h1>Northcoders news</h1>
      </Link>
      <nav>
        <Link to={"/"}>Home</Link>
        {topics.map((topic) => {
          return (
            <Link
              className="nav-item"
              key={topic.slug}
              to={`/articles/${topic.slug}`}
            >
              {topic.slug}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
