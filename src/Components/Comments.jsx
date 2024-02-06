import { useEffect, useState } from "react"
import { fetchCommentsById } from "../api calls/ArticleAPIs"
import CommentCard from "./CommentCard"

export default function Comments({article}) {
  const [comments, setComments] = useState([])
  
  useEffect(() => {
    fetchCommentsById(article.article_id).then(({data}) => {
      setComments(data)
    })
  }, [article.article_id])

  return (
    <div className="w-half bg-white rounded-lg border p-2 my-4 mx-1 comment-card-outer-div">
      <h3 className="font-bold">Comments</h3>
      {comments.map((comment) => {
        return (
          <div key={comment.comment_id}>
            <CommentCard comment={comment}/>
          </div>
        )
      })}
      <div className="w-full px-3 my-2 mx-0">
      <textarea
        className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
        name="body" placeholder='Type Your Comment' required></textarea>
      </div>
      <div className="w-full flex justify-end px-3">
        <input type='submit' className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500 btn" value='Post Comment'/>
      </div>
    </div>
  )
}