import { useState, useEffect, useContext } from "react";
import { fetchArticlesByTopic } from "../../APICalls/ArticleAPIs";
import { LoadingContext } from "../Loading Components/LoadingContext";
import EachArticleDisplay from "./EachArticleDisplay";
import Loading from "../Loading Components/Loading";

export default function ArticleDisplay() {
  const [articleDisplay, setArticleDisplay] = useState([]);
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [filteredTopic, setFilteredTopic] = useState("");

  function handleFilterTopic(e) {
    e.preventDefault();
    setFilteredTopic(e.target.text);
  }

    function handleHomePageRoute(e) {
    e.preventDefault();
    setFilteredTopic("");
  }

  useEffect(() => {
    if (filteredTopic) {
      fetchArticlesByTopic(filteredTopic).then(({ data }) => {
        setIsLoading(true);
        setArticleDisplay(data.articles);
      });
    } else {
      fetchArticlesByTopic().then(({ data }) => {
        setIsLoading(true);
        setArticleDisplay(data.articles);
      });
    }
  }, [filteredTopic]);

  if (!isLoading) {
    return <Loading />;
  }

  return (
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 bg-indigo-100"
            >
              <li>
                <a onClick={handleHomePageRoute}>Reset</a>
                <ul className="p-2">
                  <li onClick={handleFilterTopic}>
                    <a>coding</a>
                  </li>
                  <li onClick={handleFilterTopic}>
                    <a>football</a>
                  </li>
                  <li onClick={handleFilterTopic}>
                    <a>cooking</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <h1>Filter-by</h1>
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 bg-indigo-100"
            >
              <li>
                <a onClick={handleHomePageRoute}>Reset</a>
                <ul className="p-2">
                  <li onClick={handleFilterTopic}>
                    <a>coding</a>
                  </li>
                  <li onClick={handleFilterTopic}>
                    <a>football</a>
                  </li>
                  <li onClick={handleFilterTopic}>
                    <a>cooking</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <h1>Sort-by</h1>
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 bg-indigo-100"
            >
              <li>
                <a onClick={handleHomePageRoute}>Reset</a>
                <ul className="p-2">
                  <li onClick={handleFilterTopic}>
                    <a>coding</a>
                  </li>
                  <li onClick={handleFilterTopic}>
                    <a>football</a>
                  </li>
                  <li onClick={handleFilterTopic}>
                    <a>cooking</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <h1>Order-by</h1>
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
  );
}
