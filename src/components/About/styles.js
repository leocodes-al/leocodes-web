import { styled } from "styled-components";

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

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    /* TESTANDO GRID TEMPLATE */
  }
`;

export const ContainerAbout = styled.div`
  height: 600px;
  width: auto;

  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    grid-column: span 2;

    margin-bottom: 20px;
  }
`;

export const TitleAbout = styled.h1`
  font-size: 2.5rem;
  color: #f7fafc;
  font-family: "Space Grotesk", sans-serif;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

export const SubTitle = styled.p`
  font-size: 1rem;
  color: #8e9aab;
  background: transparent;

  @media (max-width: 600px) {
    font-size: 0.85rem;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  margin-top: 5rem;

  @media (max-width: 600px) {
    width: 350px;
    margin-top: 2rem;
  }
`;

export const TitleText = styled.h4`
  font-size: 1.5rem;
  color: #f7fafc;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

// config Time
export const Time = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;

  background: rgb(26, 32, 44);
  border: 1px solid rgb(0, 240, 255);

  font-family: "JetBrains Mono", monospace;
  font-size: 0.8rem;
  font-weight: 600;

  color: rgb(0, 240, 255);

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;

    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);

    width: 2px;
    height: 170px;

    background: rgba(255, 255, 255, 15%);
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;

    top: 100%;
    left: 50%;
    transform: translateX(-50%);

    width: 2px;
    height: 170px;

    background: rgba(255, 255, 255, 15%);
    z-index: -1;
  }

    @media (max-width: 600px) {
  &::before {
    content: "";
    position: absolute;

    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);

    width: 2px;
    height: 175px;

    background: rgba(255, 255, 255, 15%);
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;

    top: 100%;
    left: 50%;
    transform: translateX(-50%);

    width: 2px;
    height: 175px;

    background: rgba(255, 255, 255, 15%);
    z-index: -1;
  }

  }
`;

// config Trajetória
export const ContainerTrajectory = styled.div`
  height: auto;
  width: 500px;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 600px) {
    width: 300px;
  }
`;

export const Trajectory = styled.div`
  width: 90%;
  height: auto;
  background: #12161f;

  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 10%);

  color: #ffffff;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 600px) {
    padding: 16px;
  }
`;

export const TitleTrajectory = styled.h4`
  font-size: 1rem;
  color: #ffffff;
  font-weight: bold;
  background: transparent;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;
