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

export const fetchCommentsById = (articleId = '0') => {
  return articleAPI.get(`/articles/${articleId}/comments?p=1&limit=5`)
}