import { GlobalStyle } from './styles/GlobalStyles'
import { Divider } from './styles/Divider'

import Navbar from './components/Navbar/index'
import Hero from './components/Hero/index'
import About from './components/About/index'


function App() {

  return (
    <>
      <GlobalStyle />
      <Navbar />

      <div id="home">
        <Hero />
      </div>
      <Divider />

      <div id="about">
        <About />
      </div>
      <Divider />
    </>
  )
}

export default App
