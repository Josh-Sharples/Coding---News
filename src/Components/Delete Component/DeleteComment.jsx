import { deleteCommentApi } from "../../APICalls/ArticleAPIs";

export default function DelecteComment({comment, deleteTheComment}) {

  function handleDelete(e) {
    e.preventDefault();
    deleteCommentApi(comment.comment_id).then((data) => {
      deleteTheComment(comment.comment_id)
    })
  }

  return (
    <div className="delete-button">
    <button onClick={handleDelete} className="px-4 py-1 text-sm text-indigo-600 font-semibold rounded-full border border-indigo-200 hover:text-white hover:bg-indigo-600 hover:border-transparent">Delete</button>
    </div>
  )
}