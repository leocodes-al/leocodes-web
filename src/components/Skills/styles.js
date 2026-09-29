import { styled } from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 540px;

  padding: 124px 15% 0 15%;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

export const ContainerStack = styled.div`
  width: 100%;
  height: 95px;

  display: flex;
  flex-direction: column;
`;

export const TitleStack = styled.h2`
  font-family: "Space Grotesk", sans-serif;
  font-size: 2.25rem;
  margin-bottom: 12px;
  color: #F7FAFC;
`;

export const SubTitle = styled.p`
  color: rgb(142, 154, 171);
  font-size: 1rem;
`;

export const ContainerSkills = styled.div`
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: repeat(5, 1fr);

  gap: 20px;
`;

export const BoxSkill = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1rem;
  font-weight: bold;
  color: rgb(247, 250, 252);

  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgb(18, 22, 31);

  padding: 20px;
  transition: 0.2s;

  &:hover{
    border-color: rgb(0, 240, 255);
    transform: translateY(-2px);
  }
`;