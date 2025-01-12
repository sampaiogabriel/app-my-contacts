import PropTypes from 'prop-types';
import { useEffect } from 'react';

import CheckIcon from '../../../assets/images/icons/check-circle.svg';
import CloseIcon from '../../../assets/images/icons/x-circle.svg';
import { Container } from './styles';

const ToastMessage = ({ message, onRemoveMessage }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemoveMessage(message.id);
    }, message.duration || 7000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [message]);

  const handleRemoveMessage = () => {
    onRemoveMessage(message.id);
  };

  return (
    <Container
      type={message.type}
      onClick={handleRemoveMessage}
      tabIndex={0}
      role="button"
    >
      {message.type === 'danger' && <img src={CloseIcon} alt="Close Icon" />}
      {message.type === 'success' && <img src={CheckIcon} alt="Check Icon" />}
      <strong>{message.text}</strong>
    </Container>
  );
};

ToastMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['success', 'danger', 'default']),
    duration: PropTypes.number,
  }).isRequired,
  onRemoveMessage: PropTypes.func,
};

export default ToastMessage;
