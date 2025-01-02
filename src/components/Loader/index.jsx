import ReactDOM from 'react-dom';
import { Overlay } from './styles';
import PropTypes from 'prop-types';

const Loader = ({ isLoading }) => {
  if (!isLoading) return null;

  return ReactDOM.createPortal(
    <Overlay>
      <div className="loader"></div>
    </Overlay>,
    document.getElementById('loader-root'),
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loader;
