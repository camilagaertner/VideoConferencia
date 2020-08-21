import React from 'react';
import logo from './logo.png';
import { Jumbotron, Row, Col} from 'reactstrap';
import './App.css';
import { AiFillAudio, AiFillMessage } from "react-icons/ai";
import { BsCameraVideoFill } from "react-icons/bs";
import { IoMdReverseCamera } from "react-icons/io";
import { ImPhoneHangUp } from "react-icons/im";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Row>
        <Col xs="6" sm="4"><p className="simplificado"> Simplificado por </p>
        <img src={logo} className="App-logo" alt="logo" /></Col>
        <Col xs="6" sm="5"><p className="letra">Atendimento com </p> </Col>
        <Col xs="6" sm="3"> <h4 className="letra">Dra. Estela Estelar</h4></Col>
      </Row>
        
        <Row className="Jumbotron">
        <Col xs="6">
        <div>
      <Jumbotron >
        <p className="left"></p>
        <h3 className="Alert"> Esteliana </h3>
      </Jumbotron>
        </div>
        </Col>
        
        <Col xs="6"> 
        <div>
      <Jumbotron>
        <p className="left"></p>
        <h3 className="Alert"> Dra.Estela </h3>
      </Jumbotron>
        </div>
        </Col>
        </Row>

      <Row>
        <Col><h2 className="box"> <AiFillMessage /></h2></Col>
        <Col><h2 className="box"> <AiFillAudio /></h2></Col>
        <Col><h2 className="box2"> <ImPhoneHangUp /></h2></Col>
        <Col><h2 className="box"> <BsCameraVideoFill /></h2></Col>
        <Col><h2 className="box"> <IoMdReverseCamera /></h2></Col>
      </Row>
      </header>
    </div>
  );
}

export default App;