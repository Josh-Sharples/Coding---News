import { Link } from "react-router-dom";
import { useState } from "react";
import ArticleDisplay from "../Article Components/ArticleDisplay";

export default function Nav() {
  const [filteredTopic, setFilteredTopic] = useState("");

  function handleFilterTopic(e) {
    e.preventDefault();
    setFilteredTopic(e.target.text);
  }

  function handleHomePageRoute(e) {
    e.preventDefault();
    setFilteredTopic("");
  }

  return (
    <nav>
      <div className="navbar bg-base-100 outer-div">
        <div className="navbar-start">
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
                <a onClick={handleHomePageRoute}>Filter-by</a>
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
          <Link
            to={`/`}
            className="btn btn-ghost text-xl"
            onClick={handleHomePageRoute}
          >
            Coding News
          </Link>
        </div>
        <div className="navbar-end">
          <a className="btn">Login</a>
        </div>
      </div>
      <div>
        <h3 className="text-xl article-header">Articles</h3>
      </div>
      <ArticleDisplay filterTopic={filteredTopic} />
    </nav>
  );
}
