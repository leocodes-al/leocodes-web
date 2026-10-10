import { useState } from "react"
import { useForm } from "react-hook-form"

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

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
  BtnForm,
  ErrorForm
} from './styles'

import AlertMessage from '../AlertMessage/index'

const Contato = () => {

  const [showAlert, setShowAlert] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (dados) => {
    console.log(dados)
    setShowAlert(true)
    reset()
  };

  return (
    <Main>
      <ContainerContact>
        <TitleContact>Vamos criar algo juntos?</TitleContact>
        <SubTitle>Tem um projeto em mente? Vamos conversar sobre como transformar<br /> suas ideias em interfaces memoráveis.</SubTitle>

        <ContainerLinks>
          <SubTitle><SpanLinks> <FaGithub /> GitHub: </SpanLinks>www.github.com/leocodes-al</SubTitle>
          <SubTitle><SpanLinks> <FaLinkedin /> LinkedIn: </SpanLinks>www.linkedin.com/in/leonardo-nascimento10</SubTitle>
          <SubTitle><SpanLinks> <FaInstagram /> Instagram: </SpanLinks>www.instagram.com/_leocodes/</SubTitle>
        </ContainerLinks>
      </ContainerContact>

      <ContainerForm>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <LabelForm htmlFor="name">Nome</LabelForm>
            <Input id="name" type="text" placeholder="seu nome"
              {...register("nome", { required: "o nome é obrigatório" })} />
            {errors?.nome?.type === 'required' && <ErrorForm>{errors.nome.message}</ErrorForm>}
          </FormGroup>

          <FormGroup>
            <LabelForm htmlFor="email">E-mail</LabelForm>
            <Input id="email" type="email" placeholder="email@dominio.com"
              {...register("email", { required: "email é obrigatório" })} />
            {errors?.email?.type === 'required' && <ErrorForm>{errors.email.message}</ErrorForm>}
          </FormGroup>

          <FormGroup>
            <LabelForm htmlFor="project">Tipo de Projeto</LabelForm>
            <Select id="project" {...register("projeto", { required: "selecione projeto" })}>
              <option value="">---</option>
              <option value="Landing Page">Landing Page</option>
              <option value="Site Institucional">Site Institucional</option>
              <option value="Aplicação React">Aplicação React</option>
            </Select>
            {errors?.projeto?.type === 'required' && <ErrorForm>{errors.projeto.message}</ErrorForm>}
          </FormGroup>

          <FormGroup>
            <LabelForm htmlFor="message">Mensagem</LabelForm>
            <TextArea id="message" placeholder="descreva brevemente o projeto..."
              {...register("mensagem", { required: "mensagem é obrigatório" })} />
            {errors?.mensagem?.type === 'required' && <ErrorForm>{errors.mensagem.message}</ErrorForm>}
          </FormGroup>

          <BtnForm type="submit">
            Enviar mensagem
          </BtnForm>
        </Form>
      </ContainerForm>

      {showAlert && (
        <AlertMessage onClose={() => setShowAlert(false)} />
      )}
    </Main>
  )
}
export default Contato;