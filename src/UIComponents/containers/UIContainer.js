import React from 'react'

import Container from 'react-bootstrap/Container'

const UIContainer = ({children, ...props}) => (
  <Container {...props}>
    {children}
  </Container>
)

export default UIContainer