import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Instructions() {
  return (
    <Row id="instructions">
        <Col lg="12">
            <h3 className="text-center">PROJECT BACKGROUND</h3>
        </Col>
        <Col lg="12">
            <h5>
              Bare minimum requirements:
            </h5>
            <p>
              Provide us with your example of the simple SPA with .Net 6 on the backend, and Angular/ReactJS on the front-end. On the front-end
              side user should be able to enter the text into the text field, press &quot;Convert&quot; button, and get this text encoded into the 
              base64 format. Encoding should be performed on the backend side. Encoded string should be returned to the client one character at time, 
              one by one, and for each returned character there should be random pause on the server 1-5 seconds. All received characters should 
              form a string in a UI textbox, hence it will be updated in real-time by adding new incoming characters. User cannot start another 
              encoding process while the current one is in progress, but user can press &quot;cancel&quot; button and thus cancel the currently 
              running process.
            </p>
        </Col>   
        <Col lg="12">
            <h5>
              Bonus (recommended) requirements:
            </h5>
            <ul>
              <li>Web page should look neat; use Bootstrap or its derivatives</li>
              <li>Use default IoC, package managers and other tools to build &amp; run the app</li>
              <li>Use the latest released .Net &amp; C# with all possible new features they provide</li>
              <li>Server-side app should be hosted in Linux Docker container</li>
                <ul>
                  <li>Host API &amp; UI backend in different containers</li>
                  <li>Support basic authentication using nginx in another container</li>                    
                </ul>
              <li>Business logic should be implemented as services, with unit tests for each respectively</li>
            </ul>

        </Col>                
    </Row>
  )
}

export default Instructions
