import { styled } from "styled-components";

export const Main = styled.main`
  height: 800px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

// config title/caption home
export const ContainerTitle = styled.div`
  height: 400px;
  width: 800px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Available = styled.label`
  width: 280px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #00F0FF;
  background-color: rgba(0, 240, 255, 20%);

  color: #00F0FF;
  font-size: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  `;

export const Title = styled.h1`
  margin: 0;
  font-size: 4rem;
  color: #f7fafc;
  font-family: 'Inter', sans-serif;
  `;

export const TitleSpan = styled.span`
  font-size: 4rem;
  color: #6366f1;
  `;

export const SubTitle = styled.h3`
  margin: 0;
  font-size: 1.8rem;
  color: #8E9AAB;
`;

export const Information = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #8E9AAB; 
`;

// config button home
export const ContainerBtn = styled.div`
  max-width: 500px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  margin-top: 2.5rem;
`;

export const BtnProject = styled.button`
  width: 235px;
  height: 50px;
  font-weight: 600;

  background: #6366F1;
  color: #FFFFFF;
  
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover{
    transform: translateY(-2px);
    box-shadow: rgba(99, 102, 241, 0.35) 0px 8px 20px;
  }
`;

export const BtnContact = styled.button`
  width: 235px;
  height: 50px;
  font-weight: 600;

  background: #12161F;
  color: #FFFFFF;

  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  cursor: pointer;
  transition: 0.3s;

  &:hover{
    border-color: rgb(142, 154, 171);
    background: rgb(26, 32, 44);
  }
`;

// config img code home
export const CodeImage = styled.img`
  max-width: 550px;
  width: 100%;
  height: auto;
`;
