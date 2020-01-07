import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as Colors from '../StyleTokens/colors';

const TableWrapper = styled.div`
  padding: 1rem 0;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid ${Colors.GREAT_WHITE};
  background-color: ${Colors.OLAF};

  & tr {
    border-bottom: 1px solid ${Colors.GREAT_WHITE};
  }
  & tr:hover {
    background-color: ${Colors.GYPSUM};
  }

  & th {
    border-bottom: 1px solid ${Colors.GREAT_WHITE};
    padding: 0.5rem 2.5rem;
    background-color: ${Colors.KOALA};
    font-weight: 600;
  }
  & tfoot th {
    background-color: ${Colors.OLAF};
    padding: 0.75rem 2.5rem;
  }

  & td {
    padding: ${props => (props.condensed ? '.75rem 2.5rem' : '1.5rem 2.5rem')};
    font-weight: 400;
  }
`;

const UITable = ({ condensed = false, children = null }) => {
  return (
    <TableWrapper>
      <Table condensed={condensed}>{children}</Table>
    </TableWrapper>
  );
};

UITable.propTypes = {
  condensed: PropTypes.bool,
  children: PropTypes.node
};

export default UITable;
