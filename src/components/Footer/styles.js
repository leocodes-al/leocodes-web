import { styled } from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterContainer = styled.div`
  width: auto;
  height: 150px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
`;

export const TitleFooter = styled.h4`
  font-weight: bold;
  color: rgb(247, 250, 252);
`;

export const Copyright = styled.p`
  font-size: 0.8rem;
  color: rgb(142, 154, 171);
`;
