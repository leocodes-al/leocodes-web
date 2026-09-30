import { styled } from "styled-components";

export const NavbarContainer = styled.div`
  height: 100px;
  width: 100%;
  top: 0;
  left: 0;

  position: fixed;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15%;

  background-color: rgba(10, 12, 16, 0.6);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

export const Logo = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  font-family: "Space Grotesk", sans-serif;
  letter-spacing: 1px;

  color: rgb(247, 250, 252);

    span {
    color: #00F0FF;
    font-weight: 800;
  }
`

export const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const LinkNavbar = styled.a`
  font-size: 1rem;
  font-weight: 500;
  color: #8E9AAB;

  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;

    &:hover {
    color: #00F0FF;
  }

`

export const BtnNavbar = styled.a`
  width: 180px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.8rem;
  font-weight: bold;

  border-radius: 10px;
  background: #0A0C10;
  color: #00F0FF;
  border: 1px solid rgb(0, 240, 255);

  text-decoration: none;
  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 240, 255, 0.1);
    box-shadow: rgba(0, 240, 255, 0.2) 0px 0px 15px;
  }
`;