import { useEffect, useState, useContext } from "react";
import { fetchArticlesById } from "../api calls/ArticleAPIs";
import { LoadingContext } from "./LoadingContext";
import EachArticleDisplay from "./EachArticleDisplay";
import { useParams } from "react-router";
import Loading from "./Loading";
import Comments from "./Comments";

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
    return <Loading/>
  }

  return (
    <>
    <EachArticleDisplay article={article} />
    <Comments article={article}/>
    </>
  )
}
