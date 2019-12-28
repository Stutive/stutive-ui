import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from 'react-bootstrap/Card';

import * as Colors from '../StyleTokens/colors';

import UIFlex from '../layout/UIFlex';
import UIOverlay from '../overlay/UIOverlay';
import UIIcon from '../icon/UIIcon';

const ModalCard = styled(Card)`
  width: ${props => props.width}px;
  max-width: 90%;
  overflow: hidden;
  border: none;
`;

const UIModal = ({ children, width = 450 }) => {
  return (
    <UIOverlay>
      <ModalCard width={width} withPadding={false}>
        {children}
      </ModalCard>
    </UIOverlay>
  );
};

UIModal.Header = styled(UIFlex)`
  position: relative;
  background: rgb(10, 200, 170);
  background: linear-gradient(
    90deg,
    rgba(10, 200, 170, 1) 0%,
    rgba(0, 189, 181, 1) 100%
  );
  color: ${Colors.OLAF};
  padding: 1.2rem 1.6rem;
`;
UIModal.Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
};

UIModal.Body = styled.div`
  padding: 0.6rem 1rem;
`;
UIModal.Body.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
};

/**
 *  Close button can be passed the `onClick` Global Event Handler
 */
UIModal.CloseButton = styled(UIIcon).attrs(props => ({
  name: 'fas fa-times',
  color: Colors.OLAF
}))`
  position: absolute;
  right: 1.6rem;
  top: 50%;
  transform: translateY(-50%);
`;

UIModal.propTypes = {
  children: PropTypes.node,
  width: PropTypes.number
};

export default UIModal;
