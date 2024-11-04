import axios from "axios";

const api = axios.create({
  baseURL: "https://be-nc-news-5a06.onrender.com/api/",
  headers: "Access-Control-Allow-Origin",
});

export const getArticles = () => {
  return api.get("articles").then((response) => {
    return response.data.articles;
  });
};

export const getArticleById = (id) => {
  return api.get(`articles/${id}`).then((response) => {
    return response.data.article;
  });
};
