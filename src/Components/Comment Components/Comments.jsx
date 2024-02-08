import { useEffect, useState, useContext} from "react";
import { fetchCommentsById } from "../../APICalls/ArticleAPIs";
import CommentCard from "./CommentCard";
import PostComment from "./PostComment"
import { UserContext } from "../User Components/UserContext";
import { v4 as uuidv4 } from 'uuid';
import { LoadingContext } from "../Loading Components/LoadingContext";

export default function Comments({ article }) {
  const [comments, setComments] = useState([]);
  const [commentBody, setCommentBody] = useState('')
  const [error, setError] = useState(null)
  const [successMsg, setSuccessMsg] = useState('')
  const [postingComment, setPostingComment] = useState(false)

  const {userLogIn} = useContext(UserContext)
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  useEffect(() => {
    setIsLoading(true)
    fetchCommentsById(article.article_id).then(({ data }) => {
      setComments(data);
    });
  }, [article.article_id]);

  function handleComment(e) {
    e.preventDefault()
    setCommentBody(e.target.value)
  }
 
  function postTheComment(e) {
    e.preventDefault()
    if (!userLogIn || userLogIn.username === undefined) {
      setCommentBody('')
      setError('* Must be Logged-In to comment *')
    } else if (commentBody.length <= 0) {
      setError('* Comment cannot be blank *')
    } else {
      setError(null)
      let newComment = { author: userLogIn.username, body: commentBody, comment_id: uuidv4()}
      let previousComments = [...comments]
      setPostingComment(true)
      setComments([newComment, ...comments])
      PostComment(article.article_id, userLogIn.username, commentBody)
        .then(({data}) => {
          setIsLoading(true)
          setSuccessMsg('Comment Posted')
          newComment.comment_id = data.comment.comment_id
          setComments([newComment, ...comments])
          setCommentBody('')
          setPostingComment(false)
        })
        .catch((err) => {
          setError(err)
          setComments(previousComments)
          setPostingComment(false)
        })
    }
  }

  if (!isLoading) {
    return <Loading />;
  }

  function deleteTheComment(comment_id) {
    const updatedComments = comments.filter(comment => comment.comment_id !== comment_id);
    setComments(updatedComments);
  }

  return (
    <div className="w-half bg-white rounded-lg border p-2 my-4 mx-1 comment-card-outer-div">
      <h3 className="font-bold">Comments</h3>
      {comments.map((comment) => {
        return (
          <div key={comment.comment_id}>
            <CommentCard comment={comment} deleteTheComment={deleteTheComment}/>
          </div>
        );
      })}
      <div className="w-full px-3 my-2 mx-0">
        <textarea
          className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
          name="body"
          placeholder="Type Your Comment"
          required
          value={commentBody}
          onChange={handleComment}
        ></textarea>
      </div>
      <h1 className="comment-error-success">{error ? `${error}` : `${successMsg}`}</h1>
      <div className="w-full flex justify-end px-3">
        <input
          type="submit"
          className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500 btn"
          value="Post Comment"
          onClick={postTheComment}
          disabled={postingComment}
        />
      </div>
    </div>
  );
}
