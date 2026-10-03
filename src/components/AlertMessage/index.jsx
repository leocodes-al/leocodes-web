import {
  Main,
  ContainerAlert,
  TitleAlert,
  MessageAlert,
  BtnAlert
} from './style'

const AlertMessage = ({ onClose }) => {
  return (
    <Main>
      <ContainerAlert>
        <TitleAlert>Mensagem enviada!</TitleAlert>

        <MessageAlert>
          Agradecemos o contato. Retornaremos assim que possível.
        </MessageAlert>
      </ContainerAlert>

      <BtnAlert onClick={onClose}>
        Finalizar
      </BtnAlert>
    </Main>
  );
};

export default AlertMessage