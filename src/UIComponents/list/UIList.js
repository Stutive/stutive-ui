import React from 'react';
import PropTypes from 'prop-types';

const UIList = ({ children, childClassName, ordered, styled, ...props }) => {
  const renderChildren = () => {
    return children.map((child, i) => {
      const key = child.key ? child.key : i;
      return (
        <li className={childClassName} key={key}>
          {child}
        </li>
      );
    });
  };

  if (ordered) {
    return <ol {...props}>{renderChildren()}</ol>;
  } else {
    const styles = styled
      ? {}
      : {
          listStyle: 'none',
          padding: 0
        };
    return (
      <ul style={styles} {...props}>
        {renderChildren()}
      </ul>
    );
  }
};

UIList.propTypes = {
  children: PropTypes.node.isRequired,
  ordered: PropTypes.bool,
  styled: PropTypes.bool
};

UIList.defaultProps = {
  childClassName: '',
  ordered: false,
  styled: false
};

export default UIList;
