import "@fontsource/space-grotesk"; //import font-family

import { GlobalStyle } from './styles/GlobalStyles'
import { Divider } from './styles/Divider'

import Navbar from './components/Navbar/index'
import Home from './components/Home/index'
import About from './components/About/index'
import Skills from './components/Skills/index'
import Education from './components/Education/index'


function App() {

  return (
    <>
      <GlobalStyle />
      <Navbar />

      <div id="home">
        <Home />
      </div>
      <Divider />

      <div id="about">
        <About />
      </div>
      <Divider />

      <div id="skills">
        <Skills />
      </div>
      <Divider />

      <div id="education">
        <Education />
      </div>
      <Divider />
    </>
  )
}

export default App
