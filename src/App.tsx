
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import ProjectDetails from "./pages/ProjectDetails"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projectDetails/:id" element={<ProjectDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
