import PropTypes from 'prop-types';

import magnifierQuestion from '../../../../assets/images/icons/magnifier-question.svg';
import { Container } from './styles';

const SearchNotFound = ({ searchTerm }) => {
  return (
    <Container>
      <img src={magnifierQuestion} alt="Magnifier Question" />
      <span>
        Nenhum resultado foi encontrado para
        <strong> &quot;{searchTerm}&quot;</strong>
      </span>
    </Container>
  );
};

SearchNotFound.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};

export default SearchNotFound;
