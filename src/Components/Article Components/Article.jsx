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

  useEffect(() => {
    fetchArticlesById(articleId).then(({ data }) => {
      setIsLoading(true);
      setArticle(data.article);
    });
  }, [articleId]);

  if (!isLoading) {
    return <Loading />;
  }

  return (
    <>
      <EachArticleDisplay article={article} />
      <ArticleVotes article={article} />
      <Comments article={article} />
    </>
  );
}
