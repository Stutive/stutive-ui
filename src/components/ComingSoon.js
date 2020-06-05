import React from 'react';

import { Link } from 'react-router-dom';

import UIContainer from '../UIComponents/containers/UIContainer';

const ComingSoon = () => {
  return (
    <UIContainer className="p-5">
      <h3 className="text-center">Coming Soon</h3>
      <Link to="/">
        <p className="text-center mt-3">Back to home</p>
      </Link>
    </UIContainer>
  );
};

export default ComingSoon;
