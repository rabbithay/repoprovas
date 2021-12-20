import ModalAlert from './ModalAlert';

function generateErrorMessage(status) {
  const message = {
    404: 'o endereço que você procura não existe :/',
    400: 'dados inválidos :/ tente novamente',
    500: 'ocorreu um erro interno do servidor :( sentimos muito, tente novamente mais tarde',
  };

  return message[status] || '';
}

export default function handleError(error) {
  const title = generateErrorMessage(error?.response?.status);

  const modalObj = {
    icon: 'error',
    title,
  };

  ModalAlert(modalObj);
}
