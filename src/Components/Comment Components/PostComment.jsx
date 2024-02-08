import { postCommentApi } from "../../APICalls/ArticleAPIs";

export default function PostComment(articleId, userLogIn, commentBody) {

  return postCommentApi(articleId, userLogIn, commentBody)

    .catch(() => {
      return Promise.reject(`* Failed to post comment *`)
    })
}