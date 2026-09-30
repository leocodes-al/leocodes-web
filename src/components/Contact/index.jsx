import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';


import {
  Main,
  ContainerContact,
  TitleContact,
  SubTitle,
  ContainerLinks,
  SpanLinks,
  ContainerForm,
  Form,
  FormGroup,
  LabelForm,
  Input,
  Select,
  TextArea,
  BtnForm
} from './styles'

const Contato = () => {

const EnviarMensagem = () => {
  alert("Mensagem enviada, retornaremos assim que possível. Obrigado!")
}

  return (
    <Main>
      <ContainerContact>
        <TitleContact>Vamos criar algo juntos?</TitleContact>
        <SubTitle>Tem um projeto em mente? Vamos conversar sobre como transformar<br/> suas ideias em interfaces memoráveis.</SubTitle>

        <ContainerLinks>
          <SubTitle><SpanLinks> <FaGithub/> GitHub: </SpanLinks>www.github.com/leocodes-al</SubTitle>
          <SubTitle><SpanLinks> <FaLinkedin/> LinkedIn: </SpanLinks>www.linkedin.com/in/leonardo-nascimento10</SubTitle>
          <SubTitle><SpanLinks> <FaInstagram/> Instagram: </SpanLinks>www.instagram.com/_leocodes/</SubTitle>
        </ContainerLinks>
      </ContainerContact>

      <ContainerForm>
        <Form>
          <FormGroup>
            <LabelForm htmlFor="name">Nome</LabelForm>
            <Input id="name" type="text" placeholder="Seu nome"/>
          </FormGroup>

          <FormGroup>
            <LabelForm htmlFor="email">E-mail</LabelForm>
            <Input id="email" type="email" placeholder="seuemail@dominio.com"/>
          </FormGroup>

          <FormGroup>
            <LabelForm htmlFor="project">Tipo de Projeto</LabelForm>
            <Select id="project">
              <option value="">Selecione uma opção</option>
              <option value="Landing Page">Landing Page</option>
              <option value="Site Institucional">Site Institucional</option>
              <option value="Aplicação React">Aplicação React</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <LabelForm htmlFor="message">Mensagem</LabelForm>
            <TextArea id="message" placeholder="Descreva brevemente o projeto..."/>
          </FormGroup>

          <BtnForm type="submit" onClick={EnviarMensagem}>
            Enviar mensagem
          </BtnForm>
        </Form>
      </ContainerForm>

    </Main>
  )
}

export default Contato;