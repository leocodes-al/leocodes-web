
import { useEffect } from 'react'
import {
  FundoModal,
  CaixaModal,
  BotaoFechar,
  ImagemProjeto,
  TituloModal,
  TextoModal,
  ListaTecnologias,
  Tecnologia,
  LinksProjeto
} from './styles'

const ModalProjeto = ({ projeto, fecharModal }) => {
  // Fecha o modal ao pressionar ESC
  useEffect(() => {
    function fecharComEsc(evento) {
      if (evento.key === 'Escape') {
        fecharModal()
      }
    }

    document.addEventListener('keydown', fecharComEsc)

    return () => {
      document.removeEventListener('keydown', fecharComEsc)
    }
  }, [fecharModal])

  return (
    <FundoModal onClick={fecharModal}>
      <CaixaModal onClick={(evento) => evento.stopPropagation()}>
        <BotaoFechar onClick={fecharModal} aria-label="Fechar modal">
          &times;
        </BotaoFechar>

        <TituloModal>{projeto.title}</TituloModal>

        {projeto.image && (
          <ImagemProjeto
            src={projeto.image}
            alt={`Imagem do projeto ${projeto.title}`}
          />
        )}

        <TextoModal>{projeto.overview}</TextoModal>

        <h3>Funcionalidades</h3>

        <ul>
          {projeto.features.map((funcionalidade) => (
            <li key={funcionalidade}>{funcionalidade}</li>
          ))}
        </ul>

        <ListaTecnologias>
          {projeto.technologies.map((tecnologia) => (
            <Tecnologia key={tecnologia}>
              {tecnologia}
            </Tecnologia>
          ))}
        </ListaTecnologias>

        <TextoModal>{projeto.challenges}</TextoModal>

        <LinksProjeto>
          {projeto.liveUrl && (
            <a href={projeto.liveUrl} target="_blank" rel="noreferrer">
              Acessar projeto
            </a>
          )}

          {projeto.githubUrl && (
            <a href={projeto.githubUrl} target="_blank" rel="noreferrer">
              Ver código no GitHub
            </a>
          )}
        </LinksProjeto>
      </CaixaModal>
    </FundoModal>
  )
}

export default ModalProjeto
