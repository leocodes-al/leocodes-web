
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

const trajetoria = [
  {
    titulo: 'FUNDAMENTOS',
    descricao: 'Construindo uma base sólida em lógica, HTML, CSS e JavaScript para transformar ideias em interfaces funcionais.'
  },
  {
    titulo: 'FRONT-END',
    descricao: 'Explorando React, JavaScript e Styled Components para criar interfaces modernas, responsivas e bem estruturadas.'
  },
  {
    titulo: 'LEO CODES',
    descricao: 'Transformando estudos em projetos, experimentando novas ideias e construindo minha identidade como desenvolvedor.'
  }
]

const About = () => {
  return (
    <Main>
      <ContainerAbout>
        <TitleAbout>Quem está por trás do código?</TitleAbout>

        <SubTitle>
          Uma trajetória construída através de código, projetos e aprendizado contínuo.
        </SubTitle>

        <ContainerText>
          <TitleText>Construindo meu caminho através do código.</TitleText>

          <SubTitle>
            Sou Leonardo, desenvolvedor focado em Front-end e na criação de interfaces modernas, responsivas e funcionais.<br /><br />
            Minha jornada no desenvolvimento web começou em 2026, através de estudos, projetos práticos e experimentação com tecnologias como JavaScript, React e Styled Components.<br /><br />
            O Leo Codes nasceu como meu espaço para reunir projetos, estudos e experimentos, transformando aprendizado em prática e registrando minha evolução como desenvolvedor.
          </SubTitle>
        </ContainerText>
      </ContainerAbout>

      <Time>2026</Time>

      <ContainerTrajectory>
        {trajetoria.map((etapa) => (
          <Trajectory key={etapa.titulo}>
            <TitleTrajectory>{etapa.titulo}</TitleTrajectory>

            <SubTitle>{etapa.descricao}</SubTitle>
          </Trajectory>
        ))}
      </ContainerTrajectory>
    </Main>
  )
}

export default About