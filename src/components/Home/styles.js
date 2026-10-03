import { styled } from "styled-components";

export const Main = styled.main`
  min-height: 950px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;

  padding: 0 15%;

  /* Notebook */
  /*   @media (max-width: 1200px) {
    padding: 0 8%;
    gap: 40px;
  } */

  /* Tablet */
  /*   @media (max-width: 900px) {
    min-height: auto;
    padding: 80px 8%;

    flex-direction: column;
    justify-content: center;
  } */

  /* Celular */
  @media (max-width: 600px) {
    min-height: auto;
    padding: 60px 8%;

    flex-direction: column;
    align-items: normal;
    gap: 40px;
  }
`;

/* TÍTULO / APRESENTAÇÃO */

export const ContainerTitle = styled.div`
  width: 800px;
  max-width: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 600px) {
    width: 100%;

    margin-top: 50px;
  }
`;

export const Available = styled.label`
  width: 280px;
  height: 40px;

  border-radius: 20px;
  border: 1px solid rgba(0, 240, 255, 0.2);
  background: rgba(0, 240, 255, 0.05);

  color: #00f0ff;
  font-size: 0.8rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    width: 180px;
    height: 30px;
    font-size: 0.6rem;
  }
`;

export const Title = styled.h1`
  margin: 0;

  font-size: 4rem;
  line-height: 1.1;

  color: #f7fafc;
  font-family: "Space Grotesk", sans-serif;

  @media (max-width: 600px) {
    font-size: 2.2rem;
  }
`;

export const TitleSpan = styled.span`
  font-size: 4rem;
  color: #6366f1;

  @media (max-width: 600px) {
    font-size: 2.2rem;
  }
`;

export const SubTitle = styled.h3`
  margin: 0;

  font-size: 1.75rem;
  color: #8e9aab;

  /*   @media (max-width: 1200px) {
    font-size: 1.4rem;
  } */

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export const Information = styled.p`
  margin: 0;

  font-size: 1rem;
  line-height: 1.6;

  color: #8e9aab;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

/* BOTÕES */

export const ContainerBtn = styled.div`
  width: 100%;
  max-width: 500px;

  display: flex;
  align-items: center;
  gap: 20px;

  margin-top: 2.5rem;

  @media (max-width: 600px) {
    margin-top: 1rem;
  }
`;

export const BtnProject = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 60px;

  background: #6366f1;
  color: #ffffff;

  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;

  border-radius: 8px;
  transition: 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: rgba(99, 102, 241, 0.35) 0px 8px 20px;
  }

  @media (max-width: 600px) {
    width: 150px;
    height: 50px;
    font-size: 0.8rem;
  }
`;

export const BtnContact = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 60px;

  background: #12161f;
  color: #ffffff;

  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;

  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.08);

  transition: 0.3s;

  &:hover {
    border-color: rgb(142, 154, 171);
    background: rgb(26, 32, 44);
  }

  @media (max-width: 600px) {
    width: 150px;
    height: 50px;
    font-size: 0.8rem;
  }
`;

/* CÓDIGO */

export const ContainerCode = styled.div`
  width: 100%;
  max-width: 450px;

  background-color: #12161f;
  border-radius: 12px;
  padding: 24px;

  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.06);

  @media (max-width: 600px) {
    max-width: 100%;
    padding: 16px;

    display: flex;
    flex-direction: column;
    align-items: normal;
  }
`;

export const CodeHeader = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`;

export const CodeDot = styled.span`
  width: 12px;
  height: 12px;

  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export const CodeBody = styled.pre`
  margin: 0;

  font-family: "JetBrains Mono", monospace;
  font-size: 0.95rem;
  line-height: 1.6;

  color: #f7fafc;

  white-space: pre-wrap;
  overflow-x: auto;

  @media (max-width: 600px) {
    font-size: 0.7rem;
    line-height: 1.5;
  }
`;

/* ESTILOS DO CÓDIGO */

export const Const = styled.span`
  color: #e52e71;
`;

export const Identifier = styled.span`
  color: #00f0ff;
`;

export const Punctuation = styled.span`
  color: #8e9aab;
`;

export const Key = styled.span`
  color: rgb(142, 154, 171);
`;

export const String = styled.span`
  color: rgb(167, 243, 208);
`;
