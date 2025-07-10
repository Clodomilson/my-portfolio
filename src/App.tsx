import HeroSection from "./pages/Home/sections/HeroSection/HeroSection"
import NavBar from "./components/NavBar/NavBar"
import ProjectSection from "./pages/Home/sections/ProjectsSection/ProjectSection"
import Footer from "./components/Footer/Footer"

const App: React.FC = () => {

  return (
    <>
      <NavBar />
      <HeroSection />
      <ProjectSection />
      <Footer />
    </>
  )
}

export default App