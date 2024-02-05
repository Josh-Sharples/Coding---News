import ArticleDisplay from "./Components/ArticleDisplay"
import Header from "./Components/Header"
import Nav from "./Components/Nav"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route exact path='/api/articles' element={<Nav/>}/>
        <Route exact path="/api/articles" element={<ArticleDisplay/>} />
      </Routes>
      
    </>
  )
}

export default App
