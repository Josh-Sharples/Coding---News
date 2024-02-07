import ArticleDisplay from "./Components/Article Components/ArticleDisplay";
import Header from "./Components/Header Component/Header";
import { LoadingProvider } from "./Components/Loading Components/LoadingContext";
import Nav from "./Components/Nav Component/Nav";
import { Routes, Route } from "react-router-dom";
import Article from "./Components/Article Components/Article";

function App() {
  return (
    <>
      <LoadingProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<Nav />} />
          <Route exact path="/" element={<ArticleDisplay />} />
          <Route exact path="/articles" element={<Nav />} />
          <Route exact path="/articles" element={<ArticleDisplay />} />
          <Route exact path="articles/:articleId" element={<Article />} />
        </Routes>
      </LoadingProvider>
    </>
  );
}

export default App;
