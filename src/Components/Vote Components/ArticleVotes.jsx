import { useState, useEffect } from "react";
import {
  patchIncArticleVotes,
  patchDecArticleVotes,
} from "../../APICalls/ArticleAPIs";

export default function ArticleVotes({ article }) {
  const [articleVotes, setArticleVotes] = useState(article.votes);
  
  useEffect(() => {
    setArticleVotes(article.votes)
  }, [article.votes])

  function handleIncVotes(e) {
    e.preventDefault();
    setArticleVotes((currentVote) => currentVote + 1);
    patchIncArticleVotes(article.article_id)
  }

  function handleDecVotes(e) {
    e.preventDefault();
    setArticleVotes((currentVote) => currentVote - 1);
    patchDecArticleVotes(article.article_id)
  }

  return (
    <div className="flex items-center space-x-4 p-2">
      <h1>Article Votes</h1>
      <button
        onClick={handleIncVotes}
        className="p-2 border rounded-full hover:bg-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
      <span className="text-2xl font-bold">{articleVotes}</span>
      <button
        onClick={handleDecVotes}
        className="p-2 border rounded-full hover:bg-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </div>
  );
}
