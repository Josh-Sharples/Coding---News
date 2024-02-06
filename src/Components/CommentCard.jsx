export default function CommentCard({comment, user}) {
  return (
    <>
      <div className="flex flex-col">
        <div className="border rounded-md p-3 ml-3 my-3 mx-3">
          <div className="flex gap-3 items-center">
            <img 
            // src={user.avatar_url}
                className="object-cover w-8 h-8 rounded-full 
                border-2 border-indigo-400  shadow-indigo-400
                "/>
            <h3 className="font-bold">
              {comment.author}
              <br></br>
              {comment.created_at}
            </h3>
          </div>
          <p className="text-gray-600 mt-2">
            {comment.body}
          </p>
        </div>
      </div>
    </>
  )
}