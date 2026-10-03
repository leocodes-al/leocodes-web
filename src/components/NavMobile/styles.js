import { styled } from "styled-components";

export const ContainerMenu = styled.div`
  width: 100%;

  position: absolute;

  top: 70px;
  left: 0;

  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 25px 8%;

  background: rgba(10, 12, 16, 0.95);
  backdrop-filter: blur(12px);
`;

export const LinkMenu = styled.a`
  color: #8e9aab;
  text-decoration: none;

  &:hover {
    color: #00f0ff;
  }
`;
