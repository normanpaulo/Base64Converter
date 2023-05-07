import React from 'react';

//libs
import Container from 'react-bootstrap/Container';

//assets
import './App.css';

//components
import Header from './components/header.js';
import Footer from './components/footer.js';
import UserInput from './components/userInput.js';
import Instructions from './components/instructions.js';

function App() {
  return (
    <Container fluid>
      <Header />
      <Container>
        <UserInput />
        <Instructions />
      </Container>

      <Footer />
    </Container>
  );
}

export default App;
