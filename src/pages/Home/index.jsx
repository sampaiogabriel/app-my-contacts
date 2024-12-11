import { Container, InputSearchContainer, Header, ListContainer, Card } from '../../pages/Home/styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder='Pesquise pelo nome...' />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Sort Arrow" />
          </button>
        </header>

        <Card>
          <div className='info'>
            <div className="contact-name">
              <strong>
                Gabriel Sampaio
              </strong>
              <small>
                Instagram
              </small>
            </div>

            <span>
              gabriel@gabriel.com.br
            </span>

            <span>
              (32) 98826-5223
            </span>
          </div>

          <div className="actions">
            <Link to="/edit/1">
              <img src={edit} alt="Edit" />
            </Link>
            <button>
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>

      </ListContainer>
    </Container>
  )
}

export default Home;