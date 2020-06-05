import React from 'react';

import { Link } from 'react-router-dom';

import { OLAF, OZ } from '../UIComponents/StyleTokens/colors';

import UIContainer from '../UIComponents/containers/UIContainer';
import UIFlex from '../UIComponents/layout/UIFlex';
import UIIcon from '../UIComponents/icon/UIIcon';
import UIOptionButton from '../UIComponents/buttons/UIOptionButton';
import UITextInput from '../UIComponents/inputs/UITextInput';

import Page from '../components/Page';

const HomeView = () => {
  return (
    <Page>
      <div
        style={{
          backgroundColor: OLAF,
          padding: '3em 2em'
        }}
      >
        <UIContainer>
          <h3 className="text-center pb-4">Search for courses</h3>
          <UITextInput
            iconRight={<UIIcon color={OZ} name="fas fa-search" size="small" />}
          />
        </UIContainer>
      </div>
      <UIContainer className="pt-3">
        <UIFlex justify="center" wrap="wrap">
          <Link to="/general-education">
            <UIOptionButton use="secondary">
              <UIOptionButton.withIcon
                iconComponent={
                  <UIIcon
                    name="fas fa-check-square"
                    color={UIOptionButton.getColor('secondary')}
                    size="large"
                  />
                }
                labelComponent={
                  <h5 className="text-center">Gen Ed Requirements</h5>
                }
              />
            </UIOptionButton>
          </Link>
          <Link to="/schedule">
            <UIOptionButton use="secondary">
              <UIOptionButton.withIcon
                iconComponent={
                  <UIIcon
                    name="fas fa-calendar"
                    color={UIOptionButton.getColor('secondary')}
                    size="large"
                  />
                }
                labelComponent={<h5 className="text-center">Class Schedule</h5>}
              />
            </UIOptionButton>
          </Link>
          <Link to="/search">
            <UIOptionButton use="secondary">
              <UIOptionButton.withIcon
                iconComponent={
                  <UIIcon
                    name="fas fa-search"
                    color={UIOptionButton.getColor('secondary')}
                    size="large"
                  />
                }
                labelComponent={<h5 className="text-center">Search</h5>}
              />
            </UIOptionButton>
          </Link>
        </UIFlex>
      </UIContainer>
    </Page>
  );
};

export default HomeView;
