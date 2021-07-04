import styled, { css } from 'styled-components';
import Breakpoints from '../Breakpoints';

const FlexContainer = styled.div(
  ({ column }) => css`
    display: flex;
    align-items: center;
    flex-direction: ${column ? 'column' : ''};

    @media (max-width: ${Breakpoints.mobile}) {
      flex-direction: column;
    }
  `
);

export default FlexContainer;
