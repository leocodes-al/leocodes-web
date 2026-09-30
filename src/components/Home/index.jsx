import {
  Main,
  ContainerTitle,
  Available,
  Title,
  TitleSpan,
  SubTitle,
  Information,
  ContainerBtn,
  BtnProject,
  BtnContact
} from './styles'

import {
  ContainerCode,
  CodeHeader,
  CodeDot,
  CodeBody,
  Const,
  Identifier,
  Punctuation,
  Key,
  String
} from './styles'


const Home = () => {

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
            <BtnProject href="#projects">Ver meus projetos</BtnProject>
            <BtnContact href="#contact">Entrar em contato</BtnContact>
          </ContainerBtn>
        </ContainerTitle>

        <ContainerCode>
          <CodeHeader>
            <CodeDot color="#FF5F56" /> {/* Vermelho */}
            <CodeDot color="#FFBD2E" /> {/* Amarelo */}
            <CodeDot color="#27C93F" /> {/* Verde */}
          </CodeHeader>

          <CodeBody>
            <Const>const</Const> <Identifier>developer</Identifier> = <Punctuation>{"{"}</Punctuation>{"\n"}

            {"  "}<Key>brand</Key>: <String>'LEO CODES'</String>,{"\n"}
            {"  "}<Key>role</Key>: <String>'Frontend Developer'</String>,{"\n"}
            {"  "}<Key>core</Key>: <Punctuation>[</Punctuation><String>'React'</String>, <String>'JavaScript'</String><Punctuation>]</Punctuation>,{"\n"}
            {"  "}<Key>styling</Key>: <Punctuation>[</Punctuation><String>'styled-components'</String><Punctuation>]</Punctuation>,{"\n"}
            {"  "}<Key>focus</Key>: <Punctuation>[</Punctuation><String>'UI/UX & Performance'</String><Punctuation>]</Punctuation>{"\n"}
            
            <Punctuation>{"}"}</Punctuation>;
          </CodeBody>
        </ContainerCode>
      </Main>
    </>
  )
}

export default Home