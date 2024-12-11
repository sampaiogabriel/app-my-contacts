import { Container } from './styles';
import { Link } from 'react-router-dom';
import arrow from '../../assets/images/icons/arrow.svg';
import PropTypes from 'prop-types';

const PageHeader = ({ title = 'Novo contato' }) => {
  return (
    <Container>
      <Link to="/">
        <img src={arrow} alt="Back" />
        <span>
          Voltar
        </span>
      </Link>

      <h1>
        {title}
      </h1>
    </Container>
  )
}

export default PageHeader;

PageHeader.propTypes = {
  title: PropTypes.string,
}