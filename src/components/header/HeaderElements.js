import styled from 'styled-components';
import Breakpoints from '../../Breakpoints';
import Colors from '../../Colors';

export const Container = styled.div`
  text-align: center;
  padding-top: 2.5em;
`;

export const Title = styled.div`
  color: ${Colors.grayBlue};
  font-size: 2em;

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: 1.5em;
  }
`;

export const Subtitle = styled.div`
  font-size: 2em;
  margin-top: 0.1em;
  color: ${Colors.darkBlue};
  font-weight: bold;

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: 1.5em;
  }
`;

export const Paragraph = styled.div`
  color: ${Colors.grayBlue};
  font-size: 0.95em;
  line-height: 1.5em;
  max-width: 55ch;
  margin: 0 auto;
  margin-top: 1em;

  @media (max-width: ${Breakpoints.mobile}) {
    width: 33ch;
  }
`;
