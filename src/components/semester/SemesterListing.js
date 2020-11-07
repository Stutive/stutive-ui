import styled from 'styled-components';

import UIFlex from '../../UIComponents/layout/UIFlex';

import { KOALA, GYPSUM } from '../../UIComponents/StyleTokens/colors';

const SemesterListing = styled(UIFlex)`
  background-color: ${GYPSUM};
  border-radius: 1em;
  width: 100%;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${props => (props.isClickable ? KOALA : GYPSUM)};
  }

  padding: 0 0.8em;
  & > * {
    padding-top: 0.8em;
    padding-bottom: 0.8em;
  }
`;

export default SemesterListing;
