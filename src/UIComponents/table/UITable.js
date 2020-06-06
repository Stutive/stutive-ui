import React from 'react';

import Table from 'react-bootstrap/Table';

const UITable = ({ children, ...props }) => {
  return <Table {...props}>{children}</Table>;
};

export default UITable;
