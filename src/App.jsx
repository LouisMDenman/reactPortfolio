import './App.css'
import './styles/HomePage.css'
import './styles/About.css'
import './styles/Experience.css'
import './styles/Projects.css'
import './styles/Contact.css'
import './styles/Navbar.css'
import { useThemeContext } from './contexts/ThemeContextProvider'
import { HomePage } from './sections/HomePage'
import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { Projects } from './sections/Projects'
import { Contact } from './sections/Contact'
import { Navbar } from './components/Navbar'

function App() {
  const [currentTheme, toggleTheme] = useThemeContext()

  return (
    <>
      <Navbar />
      <HomePage />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}

export default App