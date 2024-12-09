import { Container, InputSearchContainer } from './styles'
import Logo from '../../assets/images/logo.svg'

const Header = () => {
  return (
    <Container>
      <img src={Logo} alt="MyContacts Logo" width={201} />

      <InputSearchContainer>
        <input type="text" placeholder='Pesquise pelo nome...' />
      </InputSearchContainer>
    </Container>
  )
}

export default Header;