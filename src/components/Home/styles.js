import { styled } from "styled-components";

export const Main = styled.main`
  height: 950px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15%;
`;

/* config title/caption home */
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
  border: 1px solid rgba(0, 240, 255, 0.2);
  background: rgba(0, 240, 255, 0.05);

  color: #00F0FF;
  font-size: 0.8rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
  `;

export const Title = styled.h1`
  margin: 0;
  font-size: 4rem;
  color: #f7fafc;
  font-family: "Space Grotesk", sans-serif;
  `;

export const TitleSpan = styled.span`
  font-size: 4rem;
  color: #6366f1;
  `;

export const SubTitle = styled.h3`
  margin: 0;
  font-size: 1.75rem;
  color: #8E9AAB;
`;

export const Information = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #8E9AAB; 
`;

/* config button home */
export const ContainerBtn = styled.div`
  max-width: 500px;
  width: 100%;

  display: flex;
  align-items: center;
  gap: 20px;

  margin-top: 2.5rem;
`;

export const BtnProject = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 60px;

  background: #6366F1;
  color: #FFFFFF;

  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;

  border-radius: 8px;
  transition: 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: rgba(99, 102, 241, 0.35) 0px 8px 20px;
  }
`;

export const BtnContact = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 60px;

  background: #12161F;
  color: #FFFFFF;

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
`;

/* config code home */
export const ContainerCode = styled.div`
  width: 100%;
  max-width: 450px;
  background-color: #12161F;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.06);
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
  background-color: ${props => props.color}
`;

export const CodeBody = styled.pre`
  margin: 0;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #F7FAFC;
  white-space: pre-wrap;
`;

/* config style code */
export const Const = styled.span`
  color: #E52E71;
`;

export const Identifier = styled.span`
  color: #00F0FF;
`;

export const Punctuation = styled.span`
  color: #8E9AAB;
`;

export const Key = styled.span`
  color: rgb(142, 154, 171);
`;

export const String = styled.span`
  color: rgb(167, 243, 208);
`;