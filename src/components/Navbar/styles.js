import { styled } from "styled-components";

export const NavbarContainer = styled.div`
  height: 100px;
  width: 100%;

  position: fixed;
  z-index: 2;

  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15%;

  background-color: rgba(10, 12, 16, 0.6);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  @media (max-width: 600px) {
    height: 70px;
    padding: 0 8%;
  }
`;

export const Logo = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  font-family: "Space Grotesk", sans-serif;
  letter-spacing: 1px;

  color: rgb(247, 250, 252);

  span {
    color: #00f0ff;
    font-weight: 800;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const LinkNavbar = styled.a`
  font-size: 1rem;
  font-weight: 500;
  color: #8e9aab;

  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #00f0ff;
  }
`;

export const BtnNavbar = styled.a`
  width: 180px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.8rem;
  font-weight: bold;

  border-radius: 10px;
  background: #0a0c10;
  color: #00f0ff;
  border: 1px solid rgb(0, 240, 255);

  text-decoration: none;
  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 240, 255, 0.1);
    box-shadow: rgba(0, 240, 255, 0.2) 0px 0px 15px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const MenuButton = styled.button`
  display: none;

  @media (max-width: 600px) {
    display: block;

    background: none;
    border: none;

    color: #00f0ff;
    font-size: 1.8rem;
  }
`;
