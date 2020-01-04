import React from 'react';
import styled, { keyframes } from 'styled-components';

import * as Colors from '../StyleTokens/colors';

const spinning = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const OuterRing = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;

const InnerRing = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 5px;
  border: 5px solid ${Colors.OZ_MEDIUM};
  border-radius: 50%;
  animation: ${spinning} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${Colors.OZ_MEDIUM} transparent transparent transparent;
`;

const UISpinner = () => (
  <OuterRing>
    <InnerRing />
    <InnerRing
      style={{
        animationDelay: '-0.45s'
      }}
    />
    <InnerRing
      style={{
        animationDelay: '-0.3s'
      }}
    />
    <InnerRing
      style={{
        animationDelay: '-0.15s'
      }}
    />
  </OuterRing>
);

export default UISpinner;
