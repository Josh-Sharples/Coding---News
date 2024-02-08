import { postCommentApi } from "../../APICalls/ArticleAPIs";

export default function PostComment(articleId, userLogIn, commentBody) {

  return postCommentApi(articleId, userLogIn, commentBody)
    // .then(({data}) => {
    //   return data.comment
    // })
    .catch(({response}) => {
      return `Failed to post comment`
    })
}