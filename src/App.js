import styled from 'styled-components';
import Header from './components/header';
import FlexContainer from './components/FlexContainer';
import Card from './components/card';
import { CardsDeck } from './components/card/CardElements';
import CardsConfig from './CardsConfig';
import Breakpoints from './Breakpoints';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: ${Breakpoints.mobile}) {
    padding-top: 1em;
    padding-bottom: 4em;
  }
`;

export default function App() {
  return (
    <Container>
      <Header />

      <CardsDeck>
        <FlexContainer>
          <Card card={CardsConfig.supervisor} />
          <FlexContainer column>
            <Card card={CardsConfig.teamBuilder} />
            <Card card={CardsConfig.karma} />
          </FlexContainer>
          <Card card={CardsConfig.calculator} />
        </FlexContainer>
      </CardsDeck>
    </Container>
  );
}
