import { useState, useEffect, useContext } from "react";
import { fetchArticlesByTopic } from "../../APICalls/ArticleAPIs";
import { LoadingContext } from "../Loading Components/LoadingContext";
import EachArticleDisplay from "./EachArticleDisplay";
import Loading from "../Loading Components/Loading";
import { Link, useSearchParams } from "react-router-dom";

export default function ArticleDisplay() {
  const [articleDisplay, setArticleDisplay] = useState([]);
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [searchParams, setSearchParams] = useSearchParams()
  const [error, setError] = useState(null)

  const filterByQuery = searchParams.get("topic")
  const sortByQuery = searchParams.get("sort_by")
  const orderByQuery = searchParams.get("order")

  const sortBy = sortByQuery !== null ? sortByQuery : 'created_at'
  const orderBy = orderByQuery !== null ? orderByQuery : 'DESC'

  useEffect(() => {
    setIsLoading(false)
    const unfilteredArticles = [];
    const filteredArticles = [];

    if (filterByQuery || sortBy || orderBy) {
      fetchArticlesByTopic(filterByQuery, sortBy, orderBy).then(({ data }) => {
        setIsLoading(true);
        filteredArticles.push(...data.articles);
        setArticleDisplay(data.articles);
      })
      .catch((err) => {
        setIsLoading(true)
        setError("Topic not found!")
      })
    } else {
      fetchArticlesByTopic().then(({ data }) => {
        setIsLoading(true);
        unfilteredArticles.push(...data.articles);
        setArticleDisplay(data.articles);
      });
    }
  }, [filterByQuery, sortByQuery, orderByQuery]);

  if (!isLoading) {
    return <Loading />;
  }

  return (
    <>
    {error ? <h1 className="topic-error">{`${error}`}</h1> :
    <>
    <h3 className="text-xl article-header">Articles</h3>
      <div>
        <div className="filter-order-sort-div">
          <div>
            <div className="filter-sort-order-inner-div">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-35 bg-indigo-100"
            >
              <li>
                <Link to="/articles">Reset</Link>
                <ul className="p-2">
                  <li>
                    <Link to="/articles?topic=coding">Coding</Link>
                  </li>
                  <li>
                    <Link to="/articles?topic=football">Football</Link>
                  </li>
                  <li>
                    <Link to="/articles?topic=cooking">Cooking</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <h1>Filter</h1>
          </div>
          </div>
          <div>
          <div className="filter-sort-order-inner-div">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-35 bg-indigo-100"
            >
              <li>
                <Link to={filterByQuery !== null ? `/articles?topic=${filterByQuery}` : '/articles'}>Reset</Link>
                <ul className="p-2">
                  <li>
                    <Link to={filterByQuery !== null ? `/articles?topic=${filterByQuery}&sort_by=created_at` : '/articles?sort_by=created_at'}>Date</Link>
                  </li>
                  <li>
                    <Link to={filterByQuery !== null ? `/articles?topic=${filterByQuery}&sort_by=comment_count` : '/articles?sort_by=comment_count'}>Comments</Link>
                  </li>
                  <li>
                    <Link to={filterByQuery !== null ? `/articles?topic=${filterByQuery}&sort_by=votes` : '/articles?sort_by=votes'}>Votes</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <h1>Sort</h1>
          </div>
          </div>
          <div>
          <div className="filter-sort-order-inner-div">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-35 bg-indigo-100"
            >
              <li>
                <Link to={filterByQuery !== null ? `/articles?topic=${filterByQuery}&sort_by=${sortBy}` : `/articles?sort_by=${sortBy}`}>Reset</Link>
                <ul className="p-2">
                  <li>
                    <Link to={filterByQuery !== null ? `/articles?topic=${filterByQuery}&sort_by=votes&order=ASC` : '/articles?sort_by=votes&order=ASC'}>Ascending</Link>
                  </li>
                  <li>
                    <Link to={filterByQuery !== null ? `/articles?topic=${filterByQuery}&sort_by=votes&order=DESC` : '/articles?sort_by=votes&order=DESC'}>Descending</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <h1>Order</h1>
          </div>
          </div>
        </div>
      </div>
      
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 outer-div">
      {articleDisplay.map((article) => {
        return (
          <EachArticleDisplay key={article.article_id} article={article} />
        );
      })}
    </div>
    </>
    }
    </>
  );
}
