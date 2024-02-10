import { Link } from "react-router-dom";
import moment from "moment"

export default function EachArticleDisplay({article}) {
  return (
    <div key={article.article_id} className="outer-div">
    <Link to={`/articles/${article.article_id}`}>
    <div className="group relative">
      <div className="w-half bg-white rounded-lg border p-2 my-4 mx-0 div-article-img">
        <img
          src={article.article_img_url}
          alt={`Article on ${article.title}`}
          className="article-img"
        />
      </div>
      <div className="w-half bg-white rounded-lg border p-2 my-4 mx-0">
        <div className="article-card-content">
          <h3 className="card-title">
              <span aria-hidden="true" className="absolute inset-0" />
              {article.title}
          </h3>
          <h3 className="text-lg text-black-700">
              <span aria-hidden="true" className="absolute inset-0" />
              Date: {moment(article.created_at).utc().format('DD-MM-YYYY')}
          </h3>
          <h3 className="text-lg text-black-700">
              <span aria-hidden="true" className="absolute inset-0" />
              Author: {article.author}
          </h3>
          <h3 className="text-lg text-black-700">
              <span aria-hidden="true" className="absolute inset-0" />
              Topic: {article.topic}
          </h3>
          <h3 className="text-lg text-black-700">
              <span aria-hidden="true" className="absolute inset-0" />
              Votes: {article.votes}
          </h3>
          <h3 className="text-lg text-black-700">
              <span aria-hidden="true" className="absolute inset-0" />
              Comments: {article.comment_count}
          </h3>
          <h3 className="text-m text-gray-700 body">
              <span aria-hidden="true" className="absolute inset-0" />
              {article.body}
          </h3>
        </div>
      </div>
    </div>
    </Link>
  </div>
  )
}