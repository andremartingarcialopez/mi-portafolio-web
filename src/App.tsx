
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import ProjectDetails from "./pages/ProjectDetails"
import { ScrollToTop } from "./helpers/helpers"


function App() {


  return (
    <>
      <BrowserRouter>
      <ScrollToTop/> {/*Se desplaza al inicio de la pagina*/}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projectDetails/:id" element={<ProjectDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
