import { useState, useEffect, useContext } from "react";
import { fetchArticlesByTopic } from "../api calls/ArticleAPIs";
import { LoadingContext } from "./LoadingContext";
import EachArticleDisplay from "./EachArticleDisplay";

export default function ArticleDisplay({ filterTopic }) {
  const [articleDisplay, setArticleDisplay] = useState([]);
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  useEffect(() => {
    if (filterTopic) {
      fetchArticlesByTopic(filterTopic).then(({ data }) => {
        setIsLoading(true);
        setArticleDisplay(data.articles);
      });
    } else {
      fetchArticlesByTopic().then(({ data }) => {
        setIsLoading(true);
        setArticleDisplay(data.articles);
      });
    }
  }, [filterTopic]);

  if (!isLoading) {
    return (
      <div className="load">
        <span className="loading loading-dots loading-xs load"></span>
        <span className="loading loading-dots loading-sm load"></span>
        <span className="loading loading-dots loading-md load"></span>
        <span className="loading loading-dots loading-lg load"></span>
      </div>
    );
  }

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 outer-div">
      {articleDisplay.map((article) => {
        return (
          <EachArticleDisplay
            key={article.article_id}
            article={article}
          />
        );
      })}
    </div>
  )
}
