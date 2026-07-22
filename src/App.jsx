import { BrowserRouter,Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import MatchyMatchyPage from "./pages/MatchyMatchyPage"
import MatchyMatchy2Page from "./pages/MatchyMatch2Page"

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/projects/matchy-matchy" element={<MatchyMatchyPage />} />
        <Route path="/projects/matchy-matchy-2" element={<MatchyMatchy2Page />} />
        <Route path="*" element={<NotFound />} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
