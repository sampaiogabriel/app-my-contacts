import PropTypes from 'prop-types';

import Spinner from '../Spinner';
import { StyledButton } from './styles';

const Button = ({ children, type = 'button', disabled, isLoading }) => {
  return (
    <StyledButton type={type} disabled={disabled || isLoading}>
      {!isLoading ? children : <Spinner size={16} />}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export default Button;
