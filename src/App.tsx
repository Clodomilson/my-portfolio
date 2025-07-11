import HeroSection from "./pages/Home/sections/HeroSection/HeroSection"
import NavBar from "./components/NavBar/NavBar"
import AboutSection from "./pages/Home/sections/AboutSection/AboutSection"
import ProjectSection from "./pages/Home/sections/ProjectsSection/ProjectSection"
import Footer from "./components/Footer/Footer"

const App: React.FC = () => {

  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <Footer />
    </>
  )
}

export default App