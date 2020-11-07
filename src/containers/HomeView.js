import React from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import { OLAF } from '../UIComponents/StyleTokens/colors';
import UIButton from '../UIComponents/buttons/UIButton';
import UIFlex from '../UIComponents/layout/UIFlex';

import Page from '../components/Page';

const HomeView = () => {
  return (
    <Page style={{ backgroundColor: OLAF }}>
      <Container className="mt-5">
        <Row className="mt-5">
          <Col md={{ offset: 1, span: 10 }} className="text-center">
            <h1>Built for ambitious students.</h1>
          </Col>
        </Row>
        <Row className="pt-4">
          <Col md={{ offset: 3, span: 3 }}>
            <h3>Coming soon</h3>
          </Col>
          <Col md={{ span: 6 }}>
            <p>
              Plan your future. Schedule generation. Semester "sanity checks".
              Four-year graduation planning. Course recommendations. Average
              course GPA comparison. Major and minor recommendations.
            </p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={{ offset: 2, span: 8 }} className="mb-3">
            <Image
              src={process.env.PUBLIC_URL + '/semester-plan.png'}
              fluid
              style={{
                'box-shadow': '0px -3px 20px 0px rgba(0, 0, 0, 0.1)',
                'border-radius': '1em'
              }}
            />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={{ offset: 3, span: 6 }}>
            <UIFlex justify="center">
              <UIButton
                className="p-3 mb-3"
                onClick={() =>
                  (window.location.href =
                    'https://alprielse.typeform.com/to/TWZUTvOX')
                }
              >
                Sign-up for Updates
              </UIButton>
            </UIFlex>
          </Col>
        </Row>
      </Container>
    </Page>
  );
};

export default HomeView;
