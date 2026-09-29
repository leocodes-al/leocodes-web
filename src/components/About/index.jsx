import {
  Main,
  ContainerAbout,
  TitleAbout,
  SubTitle,
  ContainerText,
  TitleText,
  ContainerTrajectory,
  Trajectory,
  TitleTrajectory,
  Time
} from './styles'

const About = () => {
 
  return (
    <>
      <Main>
        <ContainerAbout>

          <TitleAbout>Quem está por trás do código?</TitleAbout>
          <SubTitle>Uma trajetória construída através de código, projetos e aprendizado contínuo.</SubTitle>

          <ContainerText>
            <TitleText>Construindo meu caminho através do código.</TitleText>
            <SubTitle>Sou Leonardo, desenvolvedor focado em Front-end e na criação de interfaces modernas,<br /> responsivas e funcionais.<br /><br />
              Minha jornada no desenvolvimento web começou em 2026, através de estudos, projetos<br /> práticos e experimentação com tecnologias como JavaScript, React e Styled Components.<br /><br />
              O Leo Codes nasceu como meu espaço para reunir projetos, estudos e experimentos, <br />transformando aprendizado em prática e registrando minha evolução como desenvolvedor.
            </SubTitle>
          </ContainerText>

        </ContainerAbout>

        <Time>
          2026
        </Time>

        <ContainerTrajectory>
          <Trajectory>
            <TitleTrajectory>FUNDAMENTOS</TitleTrajectory>
            <SubTitle>Construindo uma base sólida em lógica, HTML, CSS e JavaScript para transformar ideias em interfaces funcionais.</SubTitle>
          </Trajectory>

          <Trajectory>
            <TitleTrajectory>FRONT-END</TitleTrajectory>
            <SubTitle>Explorando React, JavaScript e Styled Components para criar interfaces modernas, responsivas e bem estruturadas.</SubTitle>
          </Trajectory>

          <Trajectory>
            <TitleTrajectory>LEO CODES</TitleTrajectory>
            <SubTitle>Transformando estudos em projetos, experimentando novas ideias e construindo minha identidade como desenvolvedor.</SubTitle>
          </Trajectory>

        </ContainerTrajectory>
      </Main>
    </>
  )
};

export default About