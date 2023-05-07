import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <Row id="footer">
        <Col lg="12" className="text-center">
            <small>This project is powered by .Net 6.0 and React JS</small>
        </Col>
    </Row>
  )
}

export default Footer
