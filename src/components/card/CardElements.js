import styled, { css } from 'styled-components';
import Breakpoints from '../../Breakpoints';
import Colors from '../../Colors';

export const CardsDeck = styled.div`
  display: grid;
  justify-content: center;
  padding-top: 1em;
`;

export const CardContainer = styled.div(
  ({ color }) => css`
    position: relative;
    background: rgb(253, 253, 253);
    border-radius: 0.4em;
    overflow: hidden;
    height: 10em;
    width: 22vw;
    margin: 0.8em;
    box-shadow: 0.4em 0.4em 1em ${Colors.grayBlue};
    padding: 1em;

    &::after {
      content: ' ';
      position: absolute;
      top: 0;
      left: 0;
      background: ${color || 'black'};
      width: 100%;
      height: 0.35em;
    }

    @media (max-width: ${Breakpoints.mobile}) {
      width: 70vw;
    }
  `
);

export const CardTitle = styled.div`
  margin-top: 1em;
  font-size: 1.2em;
  color: ${Colors.darkBlue};
  font-weight: bold;
`;

export const CardContent = styled.div`
  font-size: 0.9em;
  margin-top: 1em;
  color: ${Colors.grayBlue};
  max-width: 35ch;
`;

export const CardIcon = styled.img`
  transform: scale(0.75);
  display: block;
  position: absolute;
  bottom: 1em;
  right: 1em;
`;
