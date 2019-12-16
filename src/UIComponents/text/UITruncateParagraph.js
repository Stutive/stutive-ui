import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: ${props => props.maxLines};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const UITruncateParagraph = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

UITruncateParagraph.propTypes = {
  maxLines: PropTypes.number.isRequired
};

export default UITruncateParagraph;
