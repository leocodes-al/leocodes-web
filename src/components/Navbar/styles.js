import { styled } from "styled-components";

export const NavbarContainer = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8%;
`;

export const Logo = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
  color: #FFFFFF;
  font-family: 'Inter', sans-serif;

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

export const BtnNavbar = styled.button`
  width: 220px;
  height: 50px;

  border-radius: 10px;

  background: #0A0C10;
  color: #00F0FF;
  border: 2px solid rgba(0, 240, 255, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 240, 255, 20%);
    border-color: #00F0FF;
  }
`