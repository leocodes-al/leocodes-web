import {
  Main,
  ContainerTitle,
  Available,
  Title,
  TitleSpan,
  SubTitle,
  Information,
  CodeImage,
  ContainerBtn,
  BtnProject,
  BtnContact
} from './styles'

import image from '../../img/CodeHero.png'

const Hero = () => {

  return (
    <>
      <Main>
        <ContainerTitle>
          <Available>• Disponível para novos projetos</Available>
          <Title>Olá, eu sou <TitleSpan>Leonardo</TitleSpan>.</Title>
          <SubTitle>Transformando ideias em experiências digitais.</SubTitle>
          <Information>Desenvolvedor Front-end focado na criação de interfaces<br></br>
            modernas, altamente funcionais, responsivas e atentas a cada detalhe.
          </Information>

          <ContainerBtn>
            <BtnProject>Ver meus projetos</BtnProject>
            <BtnContact>Entra em contato</BtnContact>
          </ContainerBtn>

        </ContainerTitle>

        <CodeImage src={image} alt="Código demonstrativo home" />
      </Main>
    </>
  )
}

export default Hero