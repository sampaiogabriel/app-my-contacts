import PropTypes from 'prop-types';

import Spinner from '../Spinner';
import { Container } from './styles';

const FormGroup = ({ error, isLoading = false, children }) => {
  return (
    <Container>
      <div className="form-item">
        {children}
        {isLoading && (
          <div className="loader">
            <Spinner size={16} />
          </div>
        )}
      </div>
      {error && <small>{error}</small>}
    </Container>
  );
};

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default FormGroup;
