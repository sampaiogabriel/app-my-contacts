import { Container, Header, ListContainer, Card } from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

const ContactsList = () => {
  return (
    <Container>
      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo Contato</a>
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
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button>
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>

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
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button>
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>

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
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button>
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>

      </ListContainer>
    </Container>
  )
}

export default ContactsList;