import { useThemeContext } from '../contexts/ThemeContextProvider.jsx'

export function Navbar() {
    const [currentTheme, toggleTheme] = useThemeContext()

    return (
        <div id="navbar">
            <a id="navhome" href="#homepage">
                <img src="src/assets/lil_uzi_me.png" id="navimg"/>
            </a>
            <div id="navbarLinks">
                <a href="#aboutme">About</a>
                <a href="#projects">Projects</a>
                <a href="#experience">Experience</a>
                <a href="#contact">Contact Me</a>
            </div>
            <div id="themeButton">
                <button id="toggleTheme" onClick={toggleTheme}>
                    Toggle Theme
                </button>
            </div>
        </div>
    ) 
}