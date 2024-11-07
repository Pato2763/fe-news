import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Article from "./Article";
import { Routes, Route } from "react-router-dom";
import TopicPage from "./TopicPage";
import ErrorPage from "./ErrorPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:article_id" element={<Article />} />
        <Route path="/articles/:topic" element={<TopicPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
