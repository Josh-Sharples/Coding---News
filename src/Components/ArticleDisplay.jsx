import { useState, useEffect} from "react"
import axios from "axios"

export default function ArticleDisplay ({filterTopic}) {
console.log(filterTopic)
  const [articleDisplay, setArticleDisplay] = useState([])
 
  useEffect(() => {
    axios.get('https://coding-news.onrender.com/api/articles').then(({data}) => {
    if(filterTopic) {
        axios.get(`https://coding-news.onrender.com/api/articles?topic=${filterTopic}`)
        .then(({data}) => {
          setArticleDisplay(data.articles)
        })
      } else {
        setArticleDisplay(data.articles)
      }
  })
  }, [filterTopic])


  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 outer-div">
      {articleDisplay.map((article) => {
      return (
        <div key={article.article_id}>
          <div key={article.article_id} className="group relative">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
              src={article.article_img_url}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="mt-4 flex justify-between">
          <div>
          <h3 className="text-m text-gray-700">
            <a>
            <span aria-hidden="true" className="absolute inset-0" />
              {article.title}
            </a>
            </h3>
            <h3 className="text-m text-gray-700">
            <a>
            <span aria-hidden="true" className="absolute inset-0" />
              {article.topic}
            </a>
            </h3>
            <h3 className="text-m text-gray-700">
            <a>
            <span aria-hidden="true" className="absolute inset-0" />
              {article.author}
            </a>
            </h3>
            <h3 className="text-m text-gray-700">
            <a>
            <span aria-hidden="true" className="absolute inset-0" />
              {article.votes}
            </a>
            </h3>
          </div>
        </div>
        </div>
        </div>
      )
    })}
    </div>
  )
}