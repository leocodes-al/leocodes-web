import { styled } from 'styled-components'

export const Main = styled.main`
  width: 100%;
  height: 950px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 2;

  background-color: rgba(10, 12, 16, 0.6);
  backdrop-filter: blur(12px);

  @media (max-width: 600px) {
    height: 100%;
    gap: 35px;
    padding: 0 8%;
  }
`;

export const ContainerAlert = styled.div`
  width: auto;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 600px) {
    width: 100%;
    text-align: center;
  }
`;

export const TitleAlert = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;

  color: #f7fafc;
  font-family: "Space Grotesk", sans-serif;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const MessageAlert = styled.p`
  font-size: 1.2rem;
  color: #8E9AAB;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

export const BtnAlert = styled.button`
  width: 160px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #6366F1;
  color: #FFFFFF;

  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;

  border: none;
  border-radius: 8px;
  transition: 0.3s;

  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: rgba(99, 102, 241, 0.35) 0px 8px 20px;
  }

  @media (max-width: 600px) {
    width: 150px;
    font-size: 0.9rem;
  }
`;