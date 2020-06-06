import styled from 'styled-components';

import Breadcrumb from 'react-bootstrap/Breadcrumb';

import { OLAF } from '../StyleTokens/colors';

const StyledBreadcrumb = styled(Breadcrumb)`
  & ol {
    background-color: ${OLAF};
  }
`;

const UIBreadcrumb = StyledBreadcrumb;

export default UIBreadcrumb;
