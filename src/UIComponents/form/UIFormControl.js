import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import UIFlex from '../layout/UIFlex';

import * as Tokens from '../../constants/tokens';

const LabelText = styled.span`
  flex: 1;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${Tokens.OBSIDIAN};
`;

const HelpText = styled.span`
  color: ${Tokens.FLINT};
  font-size: 0.9rem;
  font-weight: 300;
`;

const UIFormControl = ({
  label = null,
  help = null,
  children,
  className = '',
  ...props
}) => {
  return (
    <div className={classNames('mb-4', className)} {...props}>
      <UIFlex className="mb-1">
        {label && <LabelText>{label}</LabelText>}
        {help && <HelpText>{help}</HelpText>}
      </UIFlex>
      {children}
    </div>
  );
};

UIFormControl.propTypes = {
  label: PropTypes.string,
  help: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default UIFormControl;
