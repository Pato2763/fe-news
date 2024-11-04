import axios from "axios";

const api = axios.create({
  baseURL: "https://be-nc-news-5a06.onrender.com/api/",
  headers: "Access-Control-Allow-Origin",
});

export const getArticles = () => {
  return api.get("articles").then((response) => {
    console.log(response);
    return response.data.articles;
  });
};
