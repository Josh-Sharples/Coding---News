import ArticleDisplay from "./Components/Article Components/ArticleDisplay";
import Header from "./Components/Header Component/Header";
import { LoadingProvider } from "./Components/Loading Components/LoadingContext";
import Nav from "./Components/Nav Component/Nav";
import { Routes, Route } from "react-router-dom";
import Article from "./Components/Article Components/Article";
import Users from "./Components/User Components/Users";
import { UserProvider } from "./Components/User Components/UserContext";

function App() {
  return (
    <>
      <LoadingProvider>
        <UserProvider>
          <Header />
          <Nav />
          <Routes>
            <Route exact path="/" element={<ArticleDisplay />} />
            <Route exact path="/articles" element={<ArticleDisplay />} />
            <Route exact path="/articles" element={<ArticleDisplay />} />
            <Route exact path="articles/:articleId" element={<Article />} />
            <Route exact path="users" element={<Users />} />
          </Routes>
        </UserProvider>
      </LoadingProvider>
    </>
  );
}

export default App;
