
import styled from "styled-components";

export const Main = styled.main`
  min-height: 450px;
  width: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 10% 15%;

  @media (max-width: 768px) {
    padding: 80px 6% 50px;
  }

  @media (max-width: 480px) {
    padding: 60px 5% 40px;
    gap: 15px;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #f7fafc;

  @media (max-width: 480px) {
    font-size: 1.7rem;
  }
`;

export const SubTitle = styled.p`
  font-size: 1rem;
  color: #8e9aab;
  line-height: 1.6;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const ContainerProject = styled.div`
  display: flex;
  align-items: stretch;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 16px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const BoxProject = styled.div`
  width: 300px;
  min-height: 300px;
  height: auto;
  box-sizing: border-box;
  flex-shrink: 0;

  background-color: #12161f;

  border-radius: 10px;
  border: 1px solid #ffffff14;

  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;

  @media (max-width: 768px) {
    width: calc(50% - 8px);
    min-width: 0;
    flex-shrink: 1;
    padding: 18px;
  }

  @media (max-width: 480px) {
    width: 100%;
    min-height: 0;
    padding: 20px;
  }
`;

export const Span = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  color: #6366f1;
`;

export const TitleBox = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  color: #f7fafc;
  line-height: 1.4;

  @media (max-width: 480px) {
    font-size: 1.05rem;
  }
`;

export const InfoBox = styled.p`
  font-size: 0.8rem;
  color: #8e9aab;
  line-height: 1.6;
`;

export const ContainerLabel = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;

  margin-top: 1rem;
`;

export const Label = styled.p`
  font-size: 0.8rem;
  color: #ffffff;

  min-height: 25px;
  box-sizing: border-box;

  background-color: #ffffff0a;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 10px;
  margin: 0;

  border-radius: 5px;
  border: 1px solid #ffffff14;
`;

export const BtnDetails = styled.button`
  font-size: 0.8rem;
  font-weight: 500;

  color: #f7fafc;
  border: 1px solid #ffffff14;
  border-radius: 10px;

  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-top: auto;
  padding-top: 12px;

  cursor: pointer;
  transition: 0.3s;

  &:hover {
    border: 1px solid #9a9a9a;
    background-color: rgb(26, 32, 44);
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    width: 100%;
    min-height: 42px;
  }
`;
