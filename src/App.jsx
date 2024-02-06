import ArticleDisplay from "./Components/ArticleDisplay"
import Header from "./Components/Header"
import { LoadingProvider } from "./Components/LoadingContext";
import Nav from "./Components/Nav"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article from "./Components/Article";

function App() {

  return (
    <>
      <LoadingProvider>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Nav/>}/>
          <Route exact path='/' element={<ArticleDisplay/>} />
          <Route exact path='articles/:articleId' element={<Article/>} />
        </Routes>
      </LoadingProvider>
    </>
  )
}

export default App
