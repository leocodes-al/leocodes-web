import {
  Main,
  Title,
  SubTitle,
  ContainerProject,
  BoxProject,
  TitleBox,
  Span,
  InfoBox,
  ContainerLabel,
  Label,
  BtnDetails
} from './styles'

const Project = () => {

  return (
    <Main>
      <Title>Projetos Selecionados</Title>
      <SubTitle>Cases conceituais construídos com padrões de mercado e foco em produto.</SubTitle>

      <ContainerProject>
        <BoxProject>
          <Span>E-commerce</Span>
          <TitleBox>Hortifruti Web</TitleBox>
          <InfoBox>E-commerce de frutas, verduras e legumes com catálogo de produtos,
            carrinho de compras funcional e finalização de pedidos pelo WhatsApp.</InfoBox>

          <ContainerLabel>
            <Label>HTML</Label>
            <Label>CSS3</Label>
            <Label>JavaScript</Label>
            <Label>LocalStorage</Label>
          </ContainerLabel>

          <BtnDetails>Ver detalhamento do case</BtnDetails>
        </BoxProject>

        <BoxProject>
          <Span>Plataforma de Viagens</Span>
          <TitleBox>Órbita — Plataforma de Viagens</TitleBox>
          <InfoBox>Plataforma de viagens desenvolvida em React, com navegação dinâmica,
            destinos turísticos, pacotes e opções de hospedagem em uma
            experiência web inspirada em serviços reais de turismo.</InfoBox>

          <ContainerLabel>
            <Label>React</Label>
            <Label>Vite</Label>
            <Label>JavaScript</Label>
            <Label>Figma</Label>
          </ContainerLabel>

          <BtnDetails>Ver detalhamento do case</BtnDetails>
        </BoxProject>
      </ContainerProject>
    </Main>
  )
}

export default Project