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

  @media (max-width: 600px) {
    height: auto;
    padding: 60px 8%;
    gap: 35px;
  }
`;

export const ContainerTitle = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 600px) {
    height: auto;
    gap: 12px;
  }
`;

export const Title = styled.h2`
  font-size: 2.25rem;
  color: #F7FAFC;

  font-family: "Space Grotesk", sans-serif;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

export const SubTitle = styled.p`
  color: rgb(142, 154, 171);
  font-size: 1rem;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export const ContainerEducation = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 600px) {
    gap: 12px;
  }
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

  @media (max-width: 600px) {
    padding: 18px;
  }
`;

export const TitleBox = styled.h3`
  font-size: 1.1rem;
  color: #F7FAFC;

  @media (max-width: 600px) {
    font-size: 0.95rem;
  }
`;

export const Caption = styled.p`
  color: rgb(0, 240, 255);
  font-size: 0.875rem;
  margin-bottom: 0.5rem;

  @media (max-width: 600px) {
    font-size: 0.75rem;
  }
`;