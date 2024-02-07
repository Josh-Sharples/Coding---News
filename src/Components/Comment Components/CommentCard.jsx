import moment from "moment"

export default function CommentCard({comment, user}) {
  return (
    <>
      <div className="flex flex-col">
        <div className="border rounded-md p-3 ml-3 my-3 mx-3">
          <div className="flex gap-3 items-center">
            <img
                alt={`${comment.author}'s profile picture`}
                className="object-cover w-8 h-8 rounded-full 
                border-2 border-indigo-400  shadow-indigo-400
                "/>
            <div>
            <h3 className="font-bold">
              {comment.author}
            </h3>
            <h3 className="text-sm">
              
              {moment(comment.created_at).utc().format('DD-MM-YYYY')}
            </h3>
            </div>
          </div>
          <p className="text-gray-600 mt-2 text-sm">
            {comment.body}
          </p>
        </div>
      </div>
    </>
  )
}