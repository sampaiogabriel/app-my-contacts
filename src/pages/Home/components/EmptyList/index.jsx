import emptyBox from '../../../../assets/images/icons/empty-box.svg';
import { Container } from './styles';

const EmptyList = () => {
  return (
    <Container>
      <img src={emptyBox} alt="EmptyBox" />
      <p>
        Você ainda não tem nenhum contato cadastrado! Clique no botão
        <strong> Novo contato </strong> acima para cadastrar seu primeiro
        contato!
      </p>
    </Container>
  );
};

export default EmptyList;
