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

  const onSubmit = async (dados) => {
    try {
      const formData = new FormData();

      formData.append(
        "access_key",
        import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
      );
      formData.append("name", dados.nome);
      formData.append("email", dados.email);
      formData.append("subject", `Novo contato - ${dados.projeto}`);
      formData.append("project", dados.projeto);
      formData.append("message", dados.mensagem);

      console.log(
        "Access key carregada:",
        Boolean(import.meta.env.VITE_WEB3FORMS_ACCESS_KEY)
      );

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Falha ao enviar mensagem");
      }

      reset();
      setShowAlert(true);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("Não foi possível enviar sua mensagem. Tente novamente.");
    }
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
              {...register("nome", { required: true })} />
            {errors?.nome?.type === 'required' && <ErrorForm>o nome é obrigatório</ErrorForm>}
          </FormGroup>

          <FormGroup>
            <LabelForm htmlFor="email">E-mail</LabelForm>
            <Input id="email" type="email" placeholder="email@dominio.com"
              {...register("email", { required: true })} />
            {errors?.email?.type === 'required' && <ErrorForm>email é obrigatório</ErrorForm>}
          </FormGroup>

          <FormGroup>
            <LabelForm htmlFor="project">Tipo de Projeto</LabelForm>
            <Select id="project" {...register("projeto", { required: true })}>
              <option value="">---</option>
              <option value="Landing Page">Landing Page</option>
              <option value="Site Institucional">Site Institucional</option>
              <option value="Aplicação React">Aplicação React</option>
            </Select>
            {errors?.projeto?.type === 'required' && <ErrorForm>selecione projeto</ErrorForm>}
          </FormGroup>

          <FormGroup>
            <LabelForm htmlFor="message">Mensagem</LabelForm>
            <TextArea id="message" placeholder="descreva brevemente o projeto..."
              {...register("mensagem", { required: true })} />
            {errors?.mensagem?.type === 'required' && <ErrorForm>descrição é obrigatório</ErrorForm>}
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