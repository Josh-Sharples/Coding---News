import { deleteCommentApi } from "../../APICalls/ArticleAPIs";
import { useState } from "react";

export default function DelecteComment({comment, deleteTheComment}) {
  const [error, setError] = useState(null)
  const [deleteBtn, setDeleteBtn] = useState(false)

  function handleDelete(e) {
    e.preventDefault();
    setDeleteBtn(true)
    deleteCommentApi(comment.comment_id).then(() => {
      deleteTheComment(comment.comment_id)
    })
    .catch(() => {
      setError('Failed')
    })
  }
  
  return (
    <div className="delete-button">
      <button onClick={handleDelete} disabled={deleteBtn} className="px-4 py-1 text-sm text-indigo-600 font-semibold rounded-full border border-indigo-200 hover:text-white hover:bg-indigo-600 hover:border-transparent">{error ? `${error}` : 'Delete'}</button>
    </div>
  )
}