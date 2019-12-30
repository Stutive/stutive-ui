import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from 'react-bootstrap/Card';

import * as Colors from '../StyleTokens/colors';

import UIFlex from '../layout/UIFlex';
import UIOverlay from '../overlay/UIOverlay';
import UIIcon from '../icon/UIIcon';

import useHandleClickOutside from '../lib/useHandleClickOutside';

const emptyFunction = () => {};
const ModalCard = styled(Card)`
  width: ${props => props.width}px;
  max-width: 90%;
  overflow: hidden;
  border: none;
`;

const UIModal = ({ children, onClickOutside = emptyFunction, width = 450 }) => {
  const modalRef = useRef(null);
  useHandleClickOutside(modalRef, onClickOutside);
  return (
    <UIOverlay>
      <ModalCard ref={modalRef} width={width} withPadding={false}>
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
  & *:nth-child(1) {
    flex: 1;
    padding-right: 0.5em;
  }
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

UIModal.Footer = styled.div`
  background-color: ${Colors.KOALA};
  padding: 0.6rem 1rem;
`;
UIModal.Footer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
};

/**
 *  Close button can be passed the `onClick` Global Event Handler
 */
UIModal.CloseButton = props => (
  <UIIcon name="fas fa-times" color={Colors.OLAF} {...props} />
);

UIModal.propTypes = {
  children: PropTypes.node,
  onClickOutside: PropTypes.func,
  width: PropTypes.number
};

export default UIModal;
