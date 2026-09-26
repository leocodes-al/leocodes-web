import { NavbarContainer, Logo, NavLinksContainer, LinkNavbar, BtnNavbar } from './styles'

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <Logo>LEO <span>.</span> CODES</Logo>

        <NavLinksContainer>
          <LinkNavbar href="#home">Home</LinkNavbar>
          <LinkNavbar href="#sobre">Sobre</LinkNavbar>
          <LinkNavbar href="#projetos">Projetos</LinkNavbar>
          <LinkNavbar href="#skills">Skills</LinkNavbar>
          <LinkNavbar href="#formacao">Formação</LinkNavbar>
          <LinkNavbar href="#lab">Lab</LinkNavbar>
          <LinkNavbar href="#contato">Contato</LinkNavbar>
        </NavLinksContainer>

        <BtnNavbar>Vamos conversar</BtnNavbar>
      </NavbarContainer>
    </>
  )
}

export default Navbar
