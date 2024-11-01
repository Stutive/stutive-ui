import React from 'react';

import UIContainer from '../containers/UIContainer';
import UITable from './UITable';

export default {
  component: UITable,
  title: 'UITable'
};

export const basicUse = () => {
  return (
    <UIContainer className="mt-3">
      <UITable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th className="text-right">Hat size</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ned Flanders</td>
            <td>KL5-5555</td>
            <td className="text-right">21.00</td>
          </tr>
          <tr>
            <td>Snake Turley</td>
            <td>KL5-5556</td>
            <td className="text-right">0.00</td>
          </tr>
          <tr>
            <td>Max Power</td>
            <td>KLondike 5-3226</td>
            <td className="text-right">22.25</td>
          </tr>
          <tr>
            <td>Apu Nahasapeemapetilon</td>
            <td>KLondike 5-3226</td>
            <td className="text-right">24.00</td>
          </tr>
        </tbody>
      </UITable>
    </UIContainer>
  );
};
