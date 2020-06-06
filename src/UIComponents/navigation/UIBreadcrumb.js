import styled from 'styled-components';

import Breadcrumb from 'react-bootstrap/Breadcrumb';

const StyledBreadcrumb = styled(Breadcrumb)`
  & ol {
    background: none;
  }
`;

const UIBreadcrumb = StyledBreadcrumb;

export default UIBreadcrumb;
