import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const UITruncateString = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default UITruncateString;
