import { NavbarContainer, Logo, NavLinksContainer, LinkNavbar, BtnNavbar } from './styles'

const Navbar = () => {

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
          <LinkNavbar href="#lab">Lab</LinkNavbar>
          <LinkNavbar href="#contact">Contato</LinkNavbar>
        </NavLinksContainer>

        <BtnNavbar>Vamos conversar</BtnNavbar>
      </NavbarContainer>
    </>
  )
}

export default Navbar
