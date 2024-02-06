import axios from "axios"

const articleAPI = axios.create({
  baseURL: 'https://coding-news.onrender.com/api',
});

export const fetchArticlesByTopic = (filteredTopic = '') => {
  return articleAPI.get(`/articles?topic=${filteredTopic}`)
}

export const fetchArticlesById = (articleId = '') => {
  return articleAPI.get(`/articles/${articleId}`)
}