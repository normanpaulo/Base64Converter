import React, {useState} from 'react'

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function UserInput() {

    const [userInput, setUserInput] = useState("");
    const [outputString, setOutputString] = useState('');
    const [isLoading, setIsLoading] = useState('');
    const [controller, setController] = useState(null);

    const encodeString = async() => {   
        const newCtrl = new AbortController();    
        setController(newCtrl);
        const ctrlSignal = newCtrl.signal 
        setIsLoading(true);
        try {
            const response = await fetch(`https://localhost:7084/api/main/get-encoded-input-async/` + userInput, {signal: ctrlSignal});

            if (!response.ok) {
                throw new Error('Conversion failed');
            }
    
            const rdr = response.body.getReader();
            
            let outputText = "";
                    
            while (true) {
                const { done, value } = await rdr.read();
    
                if (done) break;
    
                outputText += new TextDecoder('utf-8').decode(value)
                setOutputString(outputText);
    
                await new Promise((resolve) =>
                    setTimeout(resolve, Math.floor(Math.random() * 4000) + 1000)
                );          
            }  
    
            setOutputString(outputString);
        }
        catch (err) {
            if (err.name === 'AbortError') {
                console.log('Request was aborted');
              }
            else {
                console.log('DONE');
            }
            setIsLoading(false);
        }
        finally {
            setIsLoading(false);
        }
    } 

    const handleCancelConvert = () => {
        setIsLoading(false);
        controller.abort();
    }
    
    return (
        <Row id="main-content">
            <Col lg={{span: 4, offset: 4}}>
                <h3 className="text-center">Enter Text</h3>
                <Form>
                    <Form.Control
                        type="text"
                        id="enter-text"    
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}  
                        disabled={isLoading}              
                    />       
                    <br/>         
                    <div className="text-center">
                        <Button variant="primary" onClick={() => encodeString()} disabled={isLoading}>Convert</Button>
                        &nbsp;
                        <Button variant="danger" onClick={() => handleCancelConvert()}>Cancel</Button>
                    </div>
                </Form>   
                <div id="output-field">
                    <textarea rows="5" value={outputString} readOnly></textarea>
                </div>    
            </Col>        
        </Row>
    )
}

export default UserInput
