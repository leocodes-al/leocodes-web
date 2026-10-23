
import styled from 'styled-components'

export const FundoModal = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;
  background: rgba(5, 8, 15, 0.8);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  @media (max-width: 480px) {
    padding: 12px;
  }
`

export const CaixaModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  position: relative;
  width: 100%;
  max-width: 700px;
  max-height: 85vh;
  overflow-y: auto;

  padding: 32px;

  color: #f7fafc;
  background: #12161f;
  border: 1px solid #ffffff20;
  border-radius: 16px;

  scrollbar-width: thin;
  scrollbar-color: #454b59 transparent;

  h3 {
    margin: 8px 0 0;
    font-size: 1rem;
    line-height: 1.5;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;

    margin: 0;
    padding-left: 22px;
  }

  li {
    color: #a4adbd;
    font-size: 0.9rem;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    gap: 14px;
    max-height: 92vh;
    padding: 24px 18px;
  }
`

export const BotaoFechar = styled.button`
  align-self: flex-end;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 36px;
  height: 36px;
  margin-bottom: -12px;

  color: #f7fafc;
  font-size: 1.8rem;

  background: transparent;
  border: 1px solid #ffffff20;
  border-radius: 8px;

  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #ffffff12;
  }
`

export const TituloModal = styled.h2`
  margin: 0;

  color: #f7fafc;
  font-size: clamp(1.4rem, 4vw, 1.8rem);
  line-height: 1.4;
  overflow-wrap: anywhere;
`

export const ImagemProjeto = styled.img`
  display: block;
  width: 100%;
  max-height: 320px;
  object-fit: cover;

  border-radius: 10px;
  border: 1px solid #ffffff20;
`

export const TextoModal = styled.p`
  margin: 0;

  color: #a4adbd;
  font-size: 0.95rem;
  line-height: 1.8;
`

export const ListaTecnologias = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

export const Tecnologia = styled.span`
  display: inline-flex;
  align-items: center;

  padding: 8px 12px;

  color: #f7fafc;
  font-size: 0.82rem;

  background: #ffffff0a;
  border: 1px solid #ffffff20;
  border-radius: 6px;
`

export const LinksProjeto = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  margin-top: 10px;
  padding-top: 22px;

  border-top: 1px solid #ffffff18;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    min-height: 42px;
    padding: 10px 16px;

    color: #f7fafc;
    font-size: 0.9rem;
    text-decoration: none;

    background: #6366f1;
    border-radius: 8px;

    transition: background 0.2s ease;
  }

  a:hover {
    background: #4f46e5;
  }

  @media (max-width: 480px) {
    flex-direction: column;

    a {
      width: 100%;
      box-sizing: border-box;
    }
  }
`