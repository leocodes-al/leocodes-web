import { styled } from 'styled-components'

export const Main = styled.main`
  height: 950px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 15%;
  gap: 50px;
`;

export const ContainerTitle = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h2`
  font-size: 2.25rem;
  color: #F7FAFC;

  font-family: "Space Grotesk", sans-serif;
`;

export const SubTitle = styled.p`
  color: rgb(142, 154, 171);
  font-size: 1rem;
`;

export const ContainerEducation = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const BoxEducation = styled.div`
  width: 100%;
  height: auto;

  background: rgb(18, 22, 31);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  padding: 24px;
`;

export const TitleBox = styled.h3`
  font-size: 1.1rem;
  color: #F7FAFC;
`;

export const Caption = styled.p`
  color: rgb(0, 240, 255);
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;