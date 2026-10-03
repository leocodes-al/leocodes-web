import { styled } from 'styled-components'

export const Main = styled.main`
  width: 100%;
  height: 950px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15%;

  @media (max-width: 600px) {
    height: auto;
    padding: 60px 8%;

    flex-direction: column;
    align-items: normal;
    justify-content: center;
    gap: 50px;
  }
`;

/* contatos */
export const ContainerContact = styled.div`
  height: 500px;
  width: auto;

  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;

export const TitleContact = styled.h2`
  font-size: 2.5rem;
  font-family: "Space Grotesk", sans-serif;
  color: #F7FAFC;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

export const SubTitle = styled.p`
  font-size: 1rem;
  color: rgb(142, 154, 171);

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export const ContainerLinks = styled.div`
  height: auto;
  width: auto;

  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 2rem;

  @media (max-width: 600px) {
    margin-top: 1.5rem;
    gap: 12px;
  }
`;

export const SpanLinks = styled.span`
  font-weight: bold;
`;

/* formulario */
export const ContainerForm = styled.div`
  height: auto;
  width: 500px;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 600px) {
    gap: 16px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LabelForm = styled.label`
  font-size: 0.9rem;
  color: rgb(142, 154, 171);

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export const Input = styled.input`
  color: rgb(255, 255, 255);
  background: rgb(18, 22, 31);

  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 12px 16px;

  &:focus {
    outline: none;
    border-color: rgb(0, 240, 255);
  }
`;

export const Select = styled.select`
  color: rgb(255, 255, 255);
  background: rgb(18, 22, 31);

  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 12px 16px;

  &:focus {
    outline: none;
    border-color: rgb(0, 240, 255);
  }
`;

export const TextArea = styled.textarea`
  min-height: 140px;

  color: rgb(255, 255, 255);
  background: rgb(18, 22, 31);

  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 12px 16px;

  font-family: inherit;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: rgb(0, 240, 255);
  }

  @media (max-width: 600px) {
    min-height: 120px;
  }
`;

export const BtnForm = styled.button`
  width: 100%;
  font-weight: 600;
  text-decoration: none;

  color: rgb(255, 255, 255);
  background: rgb(99, 102, 241);

  padding: 14px 28px;
  border-radius: 8px;

  cursor: pointer;
  transition: 0.3s;
  border: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: rgba(99, 102, 241, 0.35) 0px 8px 20px;
  }
`;