import PropTypes from 'prop-types';

import { StyledSpinner } from './styles';

const Spinner = ({ size = 32 }) => {
  return <StyledSpinner size={size} />;
};

Spinner.propTypes = {
  size: PropTypes.number,
};

export default Spinner;
