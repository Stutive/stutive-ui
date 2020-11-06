import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FormattedCreditHours from '../UIComponents/FormatLib/FormattedCreditHours';
import UICard from '../UIComponents/containers/UICard';
import UIFlex from '../UIComponents/layout/UIFlex';

import useDeviceType from '../UIComponents/lib/useDeviceType';
import { DEVICE_TYPE_ENUM } from '../UIComponents/StyleTokens/sizes';
import {
  BATTLESHIP,
  OZ_LIGHT,
  OZ_DARK,
  OLAF
} from '../UIComponents/StyleTokens/colors';

const StyledUICard = styled(({ isFocused, ...rest }) => <UICard {...rest} />)`
  background-color: ${({ isFocused }) => (isFocused ? OZ_LIGHT : OLAF)};
  border-color: ${({ isFocused }) => (isFocused ? OZ_DARK : BATTLESHIP)};
`;

const Title = styled.p`
  flex: 1;
  font-size: 1.1em;
  font-weight: 600;
  margin-bottom: 0;
`;

const CreditHours = styled.p`
  flex-basis: initial;
  whitespace: nowrap;
  font-weight: 200;
  font-size: 1.1em;
  margin-bottom: 0;
`;

const CoursePreviewCard = ({
  title,
  creditHours,
  children,
  equivalentCourse = null,
  isFocused = false,
  ...props
}) => {
  const deviceType = useDeviceType();
  const shouldWrap =
    deviceType === DEVICE_TYPE_ENUM.PHONE ||
    deviceType === DEVICE_TYPE_ENUM.PHABLET;

  const flexAdditionalStyles = shouldWrap
    ? { display: 'table', marginBottom: '.5em' }
    : { marginBottom: '.5em' };

  return (
    <StyledUICard isFocused={isFocused} {...props}>
      <UIFlex align="center" wrap="wrap" style={flexAdditionalStyles}>
        <Title>{title}</Title>
        <CreditHours>
          <FormattedCreditHours value={creditHours} />
        </CreditHours>
      </UIFlex>
      {children}
    </StyledUICard>
  );
};

CoursePreviewCard.propTypes = {
  title: PropTypes.string,
  creditHours: PropTypes.arrayOf(PropTypes.number),
  children: PropTypes.node
};

export default CoursePreviewCard;
