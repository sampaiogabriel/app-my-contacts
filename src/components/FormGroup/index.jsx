import { Container } from './styles';
import PropTypes from 'prop-types';

const FormGroup = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired
}

export default FormGroup;

