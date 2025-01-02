import { Container } from './styles';
import PropTypes from 'prop-types';

const FormGroup = ({ error, children }) => {
  return (
    <Container>
      {children}
      {error && <small>{error}</small>}
    </Container>
  );
};

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
};

FormGroup.defaultProps = {
  error: null,
};

export default FormGroup;
