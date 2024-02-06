import { Link } from "react-router-dom";

export default function EachArticleDisplay({article}) {
  return (
    <div key={article.article_id}>
    <Link to={`articles/${article.article_id}`}>
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={article.article_img_url}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-m text-gray-700">
              <span aria-hidden="true" className="absolute inset-0" />
              {article.title}
          </h3>
          <h3 className="text-m text-gray-700">
              <span aria-hidden="true" className="absolute inset-0" />
              {article.topic}
          </h3>
          <h3 className="text-m text-gray-700">
              <span aria-hidden="true" className="absolute inset-0" />
              {article.author}
          </h3>
          <h3 className="text-m text-gray-700">
              <span aria-hidden="true" className="absolute inset-0" />
              {article.votes}
          </h3>
        </div>
      </div>
    </div>
    </Link>
  </div>
  )
}