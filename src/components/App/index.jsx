import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from '../../assets/styles/global';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../assets/styles/themes/default';

import { Container } from './styles';
import Header from '../Header';
import Routes from '../../routes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
