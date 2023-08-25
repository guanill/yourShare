import React from "react";
import blender from "../images/YS_blender.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

const Borrow = () => {

return (
  <div class = "borrowpage">
    <div class = "upper_bar">
      <Row>
        <Col><h1> 0                                                                                           0</h1></Col>
      </Row>
    </div>

    <Container fluid>
      <h1 class="borrowitem">Borrow Item</h1>
      <Row>
        <div class = "back">
            <Link path to="/WelcomePage">
              <button><img src="https://th.bing.com/th/id/R.c57fe0969b74369fc0803b7630934ca8?rik=MKcE9R8nFWfxBw&pid=ImgRaw&r=0" alt="very well carry on q" width="40" /></button>        
            </Link>
        </div>
      </Row>
      <br></br>
      <Row>
        <Col align = "left">
          <div class = "borrowtext">
            <h3>
              Item Name: Blender
              <hr width="100%" color="black"></hr>
            </h3>
            <br></br>
            <h3>
              Type: Kitchen
              <hr width="100%" color="black"></hr>
            </h3>
            <br></br>
            <h3>
              Lender: Angel
              <hr width="100%" color="black"></hr>
            </h3>
          </div>
          <br></br>

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header><h3>Item Description</h3></Accordion.Header>
              <Accordion.Body>
                <h5>
                The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly but gets faster each minute after you hear this signal bodeboop. A sing lap should be completed every time you hear this sound. ding Remember to run in a straight line and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark. Get ready!… Start. ding
                </h5>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col>
          <iframe src= "https://media.tenor.com/ICeIZ7dfJdAAAAAC/mopszes-be-like-blender.gif"
          id='ifrm1' 
          name='ifrm1'
          frameborder='10'
          allow='; encrypted-media'
          class = "gif"
  
          title='gif'
          height = '500px '
          width= '400px'  />
          <div class ="blender">  <img src= {blender} alt={"a funny blender"}></img></div>
          <div class = "borrow_button">        
          <Link path to="/WelcomePage">
            <Button variant="secondary" size="lg" disabled>
              Cancel
            </Button>{' '}
          </Link>
          <Link path to="/WelcomePage">
            <Button variant="secondary" size="lg">
            Request To Borrow
            </Button>
          </Link>
          </div>     
        </Col>
      </Row>
      <br></br>
      <Row>

          
      </Row>
    </Container>
    </div>
);

};

export default Borrow;


