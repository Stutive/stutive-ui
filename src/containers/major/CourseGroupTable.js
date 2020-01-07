import React from 'react';

import UIAccordion from '../../UIComponents/accordion/UIAccordion';
import UICard from '../../UIComponents/containers/UICard';
import UITable from '../../UIComponents/table/UITable';

const CourseGroupTable = ({ title, description, requirements = [] }) => {
  return (
    <UICard>
      <UIAccordion title={title}>
        {description && <p>{description}</p>}
        <UITable condensed={true}>
          <tbody>
            {requirements.map(requirement => (
              <tr>
                <td>{requirement}</td>
                <td>Introduction to Computer Science</td>
                <td className="text-right">2</td>
              </tr>
            ))}
          </tbody>
        </UITable>
      </UIAccordion>
    </UICard>
  );
};

export default CourseGroupTable;
