import React from 'react';
import styled from 'styled-components';

import * as Colors from '../UIComponents/StyleTokens/colors';

const CourseInsertWrapper = styled.div`
  font-size: 0.9em;
  border-left: 4px solid ${Colors.HEFFALUMP};
  colors: ${Colors.HEFFALUMP};
  padding-left: 1em;
  margin: 1em;
  margin-top: 2em;
  margin-bottom: 2em;
`;

const Title = styled.p`
  flex: 1;
  font-size: 1.4em;
  font-weight: 600;
`;

const CourseInsert = ({ title, description, children }) => (
  <CourseInsertWrapper>
    <Title>{title}</Title>
    <p>{description}</p>
    {children}
  </CourseInsertWrapper>
);

export default CourseInsert;
