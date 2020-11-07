import React from 'react';

import * as Colors from '../UIComponents/StyleTokens/colors';

import NavigationBar from '../containers/NavigationBar';

const Page = ({ children, ...rest }) => {
  return (
    <>
      <div
        style={{
          minHeight: '100vh',
          backgroundColor: Colors.KOALA,
          paddingTop: '5vh',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'hidden'
        }}
        {...rest}
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
