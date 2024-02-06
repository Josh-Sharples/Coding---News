import { useEffect, useState, useContext } from "react";
import { fetchArticlesById } from "../api calls/ArticleAPIs";
import { LoadingContext } from "./LoadingContext";
import EachArticleDisplay from "./EachArticleDisplay";
import { useParams } from "react-router";

export default function Article() {
  const [article, setArticle] = useState({});
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const { articleId } = useParams()

  useEffect(() => {
    fetchArticlesById(articleId).then(({ data }) => {
      setIsLoading(true);
      setArticle(data.article);
    });
  }, [articleId]);

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

  return <EachArticleDisplay article={article} />;
}
