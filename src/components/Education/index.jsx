import {
  Main,
  ContainerTitle,
  Title,
  SubTitle,
  ContainerEducation,
  BoxEducation,
  TitleBox,
  Caption
} from './styles'

const Education = () => {

  return (
    <Main>
      <ContainerTitle>
        <Title>Formação e Certificações</Title>
        <SubTitle>Aprendizado contínuo para manter os padrões técnicos atualizados.</SubTitle>
      </ContainerTitle>

      <ContainerEducation>

        <BoxEducation>
          <TitleBox>Formação JavaScript Developer</TitleBox>
          <Caption>Plataforma de Ensino Tecnológico • DIO</Caption>
          <SubTitle>Formação imersiva focada no domínio de conceitos avançados do JavaScript, manipulação do DOM, boas práticas e consumo de APIs assíncronas.</SubTitle>
        </BoxEducation>

        <BoxEducation>
          <TitleBox>Formação React Developer</TitleBox>
          <Caption>Plataforma de Ensino Tecnológico • DIO</Caption>
          <SubTitle>Desenvolvimento de Web Apps dinâmicas com foco em Single Page Applications (SPAs), páginas componentizadas, roteamento e gerenciamento de estados.</SubTitle>
        </BoxEducation>

      </ContainerEducation>
    </Main>
  )
};

export default Education;