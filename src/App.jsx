import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Article from "./Article";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:article_id" element={<Article />} />
      </Routes>
    </>
  );
}

export default App;
