import React from 'react';

import * as Colors from '../UIComponents/StyleTokens/colors';

import NavigationBar from '../containers/NavigationBar';

const Page = ({ children }) => {
  return (
    <>
      <div
        style={{
          minHeight: '100vh',
          backgroundColor: Colors.KOALA,
          paddingTop: '7vh',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'hidden'
        }}
      >
        <NavigationBar />
        <div
          style={{
            position: 'relative',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Page;
