import React from 'react';

import UICard from '../../UIComponents/containers/UICard';
import UIFlex from '../../UIComponents/layout/UIFlex';
import UIIcon from '../../UIComponents/icon/UIIcon';

const AddSemesterButton = ({ ...props }) => {
  return (
    <div {...props}>
      <UICard className="p-2">
        <h6>Add Semester to Plan</h6>
        <UIFlex className="p-4" justify="center">
          <UIIcon name="fas fa-plus" size="large" />
        </UIFlex>
      </UICard>
    </div>
  );
};

export default AddSemesterButton;
