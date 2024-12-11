import { Container } from './styles'
import Logo from '../../assets/images/logo.svg'

const Header = () => {
  return (
    <Container>
      <img src={Logo} alt="MyContacts Logo" width={201} />
    </Container>
  )
}

export default Header;