import PropTypes from 'prop-types';

import CheckIcon from '../../../assets/images/icons/check-circle.svg';
import CloseIcon from '../../../assets/images/icons/x-circle.svg';
import { Container } from './styles';

const ToastMessage = ({ text, type = 'default' }) => {
  return (
    <Container type={type}>
      {type === 'danger' && <img src={CloseIcon} alt="Close Icon" />}
      {type === 'success' && <img src={CheckIcon} alt="Check Icon" />}
      <strong>{text}</strong>
    </Container>
  );
};

ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'danger', 'default']),
};

export default ToastMessage;
