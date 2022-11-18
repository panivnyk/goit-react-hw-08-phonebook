import { Helmet } from 'react-helmet';
import { Container, Banner } from './Home.styled';

export default function Home() {
  return (
    <Container>
      <Helmet>
        <title>Personal phonebook</title>
      </Helmet>
      <Banner>Personal phonebook manager welcome page!</Banner>
    </Container>
  );
}
