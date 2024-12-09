import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../api/api";
import "./Header.css";

const Header = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then(({ topics }) => {
      setTopics(topics);
    });
  }, []);

  return (
    <header className="header">
      <Link to={"/"}>
        <h1 className="title">Northcoders news</h1>
      </Link>
      <nav className="nav">
        <Link className="nav-link" to={"/"}>
          Home
        </Link>
        {topics.map((topic) => {
          return (
            <Link
              className="nav-link"
              key={topic.slug}
              to={`/articles/${topic.slug}`}
            >
              {topic.slug[0].toUpperCase() + topic.slug.slice(1)}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
