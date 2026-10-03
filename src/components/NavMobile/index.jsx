import { ContainerMenu, LinkMenu } from './styles'

const MenuMobile = () => {
  return (
    <ContainerMenu>
      <LinkMenu href="#home">Início</LinkMenu>
      <LinkMenu href="#about">Sobre</LinkMenu>
      <LinkMenu href="#projects">Projetos</LinkMenu>
      <LinkMenu href="#skills">Tecnologias</LinkMenu>
      <LinkMenu href="#education">Formação</LinkMenu>
      <LinkMenu href="#contact">Contato</LinkMenu>
    </ContainerMenu>
  )
}

export default MenuMobile