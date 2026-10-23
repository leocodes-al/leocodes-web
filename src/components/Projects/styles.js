import styled from "styled-components";

export const Main = styled.main`
  min-height: 450px;
  width: auto;

  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 10% 15%;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #f7fafc;

`;

export const SubTitle = styled.p`
  font-size: 1rem;
  color: #8e9aab;
`;

export const ContainerProject = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const BoxProject = styled.div`
  width: 300px;
  height: 300px;

  background-color: #12161f;

  border-radius: 10px;
  border: 1px solid #ffffff14;

  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
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
`;

export const InfoBox = styled.p`
  font-size: 0.8rem;
  color: #8e9aab;
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

  height: 25px;

  background-color: #ffffff0a;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

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
  padding: 10px;
  margin-top: 0.5rem;

  cursor: pointer;
  transition: 0.3s;

  &:hover {
    border: 1px solid #9a9a9a;
    background-color: rgb(26, 32, 44);
    transform: translateY(-2px);
    transition: 0.3s;
  }
`;
