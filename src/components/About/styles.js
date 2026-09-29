import { styled } from 'styled-components'

export const Main = styled.main`
  width: 100%;
  height: 950px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15%;
`;

export const ContainerAbout = styled.div`
  height: 600px;
  width: auto;

  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const TitleAbout = styled.h1`
  font-size: 2.5rem;
  color: #F7FAFC;
  font-family: "Space Grotesk", sans-serif;
`;

export const SubTitle = styled.p`
  font-size: 1rem;
  color: #8E9AAB;
  background: transparent;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  margin-top: 5rem;
`;

export const TitleText = styled.h4`
  font-size: 1.5rem;
  color: #F7FAFC;
`;

// config Time
export const Time = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;

  background: rgb(26,32,44);
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

  // row vertical up
  &::before {
    content: "";
    position: absolute;

    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);

    width: 2px;
    height: 190px;

    background: rgba(255, 255, 255, 15%);
    z-index: -1;
  }

  // row vertical down
  &::after {
    content: "";
    position: absolute;

    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    
    width: 2px;
    height: 190px;

    background: rgba(255, 255, 255, 15%);
    z-index: -1;
  }
`;

// config Trajetória
export const ContainerTrajectory = styled.div`
  height: auto;
  width: 500px;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const Trajectory = styled.div`
  width: 100%;
  height: auto;
  background: #12161F;

  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 10%);

  color: #FFFFFF;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const TitleTrajectory = styled.h4`
  font-size: 1rem;
  color: #FFFFFF;
  font-weight: bold;
  background: transparent;
`;

