import moment from "moment"
import { useContext } from "react"
import { UserContext } from "../User Components/UserContext"
import DeleteComment from "../Delete Component/DeleteComment"

export default function CommentCard({comment, deleteTheComment}) {

  const {userLogIn} = useContext(UserContext)

  return (
    <>
      <div className="flex flex-col">
        <div className="border rounded-md p-3 ml-3 my-3 mx-3">
          <div className="flex gap-3 items-center delete-spacing">
            <div className="comment-card-img-title">
            <img
                alt={`${comment.author}'s profile picture`}
                src={userLogIn.avatar_url}
                className="object-cover w-8 h-8 rounded-full 
                border-2 border-indigo-400  shadow-indigo-400
                "/>
            <div className="comment-author">
            <h3 className="font-bold">
              {comment.author}
            </h3>
            <h3 className="text-sm">
              {moment(comment.created_at).utc().format('DD-MM-YYYY')}
            </h3>
            </div>
            </div>
            {userLogIn.username === comment.author ? <DeleteComment comment={comment} deleteTheComment={deleteTheComment}/> : null}
          </div>
          <p className="text-gray-600 mt-2 text-sm">
            {comment.body}
          </p>
          
        </div>
      </div>
    </>
  )
}