import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../src/Contexts/User";

const api = axios.create({
  baseURL: "https://be-nc-news-5a06.onrender.com/api/",
  headers: "Access-Control-Allow-Origin",
});

export const getArticles = (topic) => {
  return api.get("articles", { params: { topic: topic } }).then((response) => {
    return response.data.articles;
  });
};

export const getArticleById = (id) => {
  return api.get(`articles/${id}`).then((response) => {
    return response.data.article;
  });
};

export const getCommentsByArticleId = (id) => {
  return api.get(`articles/${id}/comments`).then((response) => {
    return response.data.comments;
  });
};

export const updateVotes = (id, body) => {
  return api.patch(`/articles/${id}`, body).then((response) => {
    return response.data;
  });
};

export const postComment = (id, body, user) => {
  return api
    .post(`articles/${id}/comments`, { username: user, body: body })
    .then((response) => {
      return response.data;
    });
};

export const deleteComment = (id) => {
  const path = `/comments/${id}`;
  return api.delete(path).then((response) => {
    return response.status;
  });
};

export const getTopics = () =>
  api.get("topics").then((res) => {
    return res.data;
  });
