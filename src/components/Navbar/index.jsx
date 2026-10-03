import { useState } from 'react'

import {
  NavbarContainer,
  Logo,
  NavLinksContainer,
  LinkNavbar,
  BtnNavbar,
  MenuButton
} from './styles'

import MenuMobile from '../NavMobile/index'

const Navbar = () => {

  const [menuOpen,setMenuOpen] = useState(false)

  return (
    <>
      <NavbarContainer>
        <Logo>LEO <span>.</span> CODES</Logo>

        <NavLinksContainer>
          <LinkNavbar href="#home">Início</LinkNavbar>
          <LinkNavbar href="#about">Sobre</LinkNavbar>
          <LinkNavbar href="#projects">Projetos</LinkNavbar>
          <LinkNavbar href="#skills">Tecnologias</LinkNavbar>
          <LinkNavbar href="#education">Formação</LinkNavbar>
          {/*           <LinkNavbar href="#lab">Lab</LinkNavbar> */}
          <LinkNavbar href="#contact">Contato</LinkNavbar>
        </NavLinksContainer>

        <BtnNavbar href="#contact">Vamos conversar</BtnNavbar>

        <MenuButton onClick={() => setMenuOpen(prev => !prev)} >☰</MenuButton>

        {menuOpen && <MenuMobile />}

      </NavbarContainer>


    </>
  )
}

export default Navbar
