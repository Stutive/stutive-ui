import React, { useState } from 'react';

import UICard from '../../UIComponents/containers/UICard';
import UIFlex from '../../UIComponents/layout/UIFlex';
import UIReplacableText from '../../UIComponents/inputs/UIReplacableText';
import UIIcon from '../../UIComponents/icon/UIIcon';

import { CALYPSO, OBSIDIAN } from '../../UIComponents/StyleTokens/colors';

const TrashIconButton = ({ ...props }) => {
  //  TODO: Implement UIIconButton
  const [iconHovered, setIconHovered] = useState(false);
  return (
    <UIIcon
      className="p-3"
      color={iconHovered ? CALYPSO : OBSIDIAN}
      name="fas fa-trash"
      onMouseEnter={() => setIconHovered(true)}
      onMouseLeave={() => setIconHovered(false)}
      size="small"
      {...props}
    />
  );
};

const SemesterCard = ({
  children,
  label,
  onLabelChange,
  onRemoveSemester,
  totalCreditHours,
  ...props
}) => {
  const renderHeader = () => (
    <UIFlex className="pl-2 pr-2" align="center" style={{ width: '100%' }}>
      <UIReplacableText
        className="mb-2"
        style={{ fontSize: '1.5rem', flexGrow: 1 }}
        value={label}
        onChange={onLabelChange}
      />
      <div>
        <TrashIconButton onClick={onRemoveSemester} />
      </div>
    </UIFlex>
  );
  return (
    <div style={{ flexBasis: '25em', maxWidth: '50%', flexGrow: 1 }} {...props}>
      <UICard style={{ height: '100%' }}>
        <UIFlex direction="column" style={{ height: '100%' }}>
          {renderHeader()}
          {children}
          <UIFlex className="pt-3" justify="flex-end" style={{ width: '100%' }}>
            <div>
              <span style={{ fontWeight: 500 }}>Total Credit Hours:</span>{' '}
              {totalCreditHours}
            </div>
          </UIFlex>
        </UIFlex>
      </UICard>
    </div>
  );
};

export default SemesterCard;
