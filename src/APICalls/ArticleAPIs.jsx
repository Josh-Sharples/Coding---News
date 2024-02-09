import axios from "axios"

const articleAPI = axios.create({
  baseURL: 'https://coding-news.onrender.com/api',
});

export const fetchArticlesByTopic = (filteredTopic, sortBy, orderBy) => {
  if(filteredTopic) {
    return articleAPI.get(`/articles?topic=${filteredTopic}&sort_by=${sortBy}&order=${orderBy}`)
  }
  return articleAPI.get(`/articles?sort_by=${sortBy}&order=${orderBy}`)
}

export const fetchArticlesById = (articleId = '') => {
  return articleAPI.get(`/articles/${articleId}`)
}

export const fetchCommentsById = (articleId = '0') => {
  return articleAPI.get(`/articles/${articleId}/comments?p=1&limit=5`)
}

export const patchIncArticleVotes = (articleId) => {
  return articleAPI.patch(`/articles/${articleId}`, { inc_votes: 1 })
}

export const patchDecArticleVotes = (articleId) => {
  return articleAPI.patch(`/articles/${articleId}`, { inc_votes: -1 })
}

export const fetchUsers = () => {
  return articleAPI.get(`/users`)
}

export const postCommentApi = (articleId, userLogIn, commentBody) => {
  return articleAPI.post(`/articles/${articleId}/comments`, { username: userLogIn,  body: commentBody})
}

export const deleteCommentApi = (comment_id) => {
  return articleAPI.delete(`/comments/${comment_id}`)
}