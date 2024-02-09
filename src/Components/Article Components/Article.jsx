import { useEffect, useState, useContext } from "react";
import { fetchArticlesById } from "../../APICalls/ArticleAPIs";
import { LoadingContext } from "../Loading Components/LoadingContext";
import EachArticleDisplay from "./EachArticleDisplay";
import { useParams } from "react-router";
import Loading from "../Loading Components/Loading";
import Comments from "../Comment Components/Comments";
import ArticleVotes from "../Vote Components/ArticleVotes";

export default function Article() {
  const [article, setArticle] = useState({});
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const { articleId } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchArticlesById(articleId).then(({ data }) => {
      setArticle(data.article);
    })
    .catch((err) => {
      setIsLoading(true);
      setError("Article ID not found");
    })
  }, [articleId]);

  if (!isLoading) {
    return <Loading />;
  }

  return (
    <>
      {error ? <h1 className="article-id-error">{`${error}`}</h1> :
      <>
      <EachArticleDisplay article={article} />
      <ArticleVotes article={article} />
      <Comments article={article}/>
      </>
      }
    </>
  );
}
