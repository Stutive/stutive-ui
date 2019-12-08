import React from 'react';
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';

const UICard = ({ title, children, ...props }) => {
  return (
    <Card {...props}>
      <Card.Body>
        {title && <Card.Title>{title}</Card.Title>}
        {children}
      </Card.Body>
    </Card>
  );
};

UICard.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};

UICard.defaultProps = {
  title: null
};

export default UICard;
