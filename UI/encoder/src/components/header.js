import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Header() {
  return (
    <Row id="header">
        <Col lg="12">
            <Container fluid>
                <Row>
                    <Col lg="6">
                        <h4>Base 64 Encoder</h4>
                    </Col>
                    <Col lg="6" className="text-right">
                        <p>NPCP</p>
                    </Col>
                </Row>
            </Container>
        </Col>
    </Row>
  )
}

export default Header
