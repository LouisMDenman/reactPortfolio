import './App.css'
import { useThemeContext } from './contexts/ThemeContextProvider'

function App() {
  const [currentTheme, toggleTheme] = useThemeContext()

  return (
    <>
      <button id="theme" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </>
  )
}

export default App
