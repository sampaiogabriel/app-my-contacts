import PropTypes from 'prop-types';

import { Container } from './styles';

const InputSearch = ({ value, onChange }) => {
  return (
    <Container>
      <input
        value={value}
        type="text"
        placeholder="Pesquise pelo nome..."
        onChange={onChange}
      />
    </Container>
  );
};

InputSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputSearch;
