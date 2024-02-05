import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { useState } from "react";
import ArticleDisplay from "./ArticleDisplay";

export default function Nav() {
  const [filteredTopic, setFilteredTopic] = useState('')

  function handleFilterTopic(e) {
    e.preventDefault();
    setFilteredTopic(e.target.text);
  }
  
  return (
    <nav>
    <div className="navbar bg-base-100 outer-div">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a>Filter-by</a>
          <ul className="p-2">
            <li onClick={handleFilterTopic}><a>coding</a></li>
            <li onClick={handleFilterTopic}><a>football</a></li>
            <li onClick={handleFilterTopic}><a>cooking</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Coding News</a>
  </div>
  <div className="navbar-end">
    <a className="btn">Login</a>
  </div>
  </div>
  <div>
    <NavLink to="/api/articles" className="text-xl article-header">Articles</NavLink>
    <ArticleDisplay filterTopic={filteredTopic}/>
  </div>
  </nav>
  );
}