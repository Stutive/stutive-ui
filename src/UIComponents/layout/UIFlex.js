import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FlexWrapper = styled.div`
  display: flex;
  align-items: ${props => props.align};
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  flex-wrap: ${props => props.wrap};
  & > * {
    min-width: 0;
  }
`;

const UIFlex = ({ children, ...props }) => {
  return <FlexWrapper {...props}>{children}</FlexWrapper>;
};

UIFlex.propTypes = {
  align: PropTypes.oneOf(['baseline', 'center', 'end', 'start', 'stretch']),
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(['column', 'row']),
  justify: PropTypes.oneOf([
    'around',
    'between',
    'center',
    'flex-end',
    'start'
  ]),
  wrap: PropTypes.oneOf(['nowrap', 'wrap'])
};

UIFlex.defaultProps = {
  align: 'start',
  direction: 'row',
  justify: 'start',
  wrap: 'nowrap'
};

export default UIFlex;
