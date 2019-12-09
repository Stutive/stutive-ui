import React from 'react';
import PropTypes from 'prop-types';

const UIFlex = ({ align, children, direction, justify, wrap }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: align,
        flexDirection: direction,
        justifyContent: justify,
        flexWrap: wrap
      }}
    >
      {children}
    </div>
  );
};

UIFlex.propTypes = {
  align: PropTypes.oneOf(['baseline', 'center', 'end', 'start', 'stretch']),
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(['column', 'row']),
  justify: PropTypes.oneOf(['around', 'between', 'center', 'end', 'start']),
  wrap: PropTypes.oneOf(['nowrap', 'wrap'])
};

UIFlex.defaultProps = {
  align: 'start',
  direction: 'row',
  justify: 'staart',
  wrap: 'nowrap'
};

export default UIFlex;
