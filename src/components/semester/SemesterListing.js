import styled from 'styled-components';

import { KOALA, GYPSUM } from '../../UIComponents/StyleTokens/colors';

const SemesterListing = styled.div`
  background-color: ${GYPSUM};
  border-radius: 1em;
  padding: 0.8em;
  width: 100%;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${props => (props.isClickable ? KOALA : GYPSUM)};
  }
`;

export default SemesterListing;
