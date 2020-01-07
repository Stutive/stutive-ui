import React, { useState } from 'react';
import PropTypes from 'prop-types';

import * as Colors from '../StyleTokens/colors';
import UIFlex from '../layout/UIFlex';
import UIIcon from '../icon/UIIcon';

const UIAccordion = ({ children = null, title = '' }) => {
  const [showContent, setShowContent] = useState(false);
  const toggleContent = () => setShowContent(!showContent);

  return (
    <div>
      <UIFlex>
        <UIIcon
          color={Colors.OZ}
          name={showContent ? 'fas fa-chevron-down' : 'fas fa-chevron-right'}
        />
        <div className="pl-2">
          <h3 onClick={toggleContent}>{title}</h3>
        </div>
      </UIFlex>
      {showContent && <div>{children}</div>}
    </div>
  );
};

UIAccordion.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

export default UIAccordion;
