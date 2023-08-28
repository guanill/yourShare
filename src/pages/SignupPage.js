import React, { useState } from "react";
import {Container, Row, Col, Image, Form, Button, Alert} from "react-bootstrap";
import Title from "./components/Title"
import logo from "../images/YS_icon.png";
import { database } from "./firebase";

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [zipcodeError, setZipcodeError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && phone && zipcode) {
      // Store data in the Firebase Realtime Database
      database.ref("users").push({
        name: name,
        phone: phone,
        zipcode: zipcode
      });
  
      // Clear the form fields
      setName("");
      setPhone("");
      setZipcode("");
    } else {
    let formIsValid = true;

    if (!name) {
      setNameError('Please enter your name.');
      formIsValid = false;
    } else {
      setNameError('');
    }

    if (!phone || !/^[0-9]{10}$/.test(phone)) {
      setPhoneError('Please enter a valid 10-digit phone number.');
      formIsValid = false;
    } else {
      setPhoneError('');
    }

    if (!zipcode || !/^[0-9]{5}$/.test(zipcode)) {
      setZipcodeError('Please enter a valid 5-digit zipcode.');
      formIsValid = false;
    } else {
      setZipcodeError('');
    }

    if (formIsValid) {
      console.log('Name:', name);
      console.log('Phone:', phone);
      console.log('Zipcode:', zipcode);
    }
  }
  };

  return (
    <div>
      <Container fluid className="d-flex flex-column" style={{ height: "100vh" }}>
      <Row style={{
        backgroundColor: "gray",
        height: "5vh",
      }}>
        <Col></Col>
      </Row>
      <Row className="flex-fill">
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <Title text="Your Share" level="1"></Title>
          <Image src={logo} alt="YourShare Logo" fluid/>
        </Col>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <div>
            <Title text="Join Your Community" level="2"></Title>
            <Title text="Sign-Up" level="3"></Title>
          </div>
          <div>
            
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                {nameError && <Form.Text className="text-danger">{nameError}</Form.Text>}
              </Form.Group>

              <Form.Group controlId="formPhone" className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  pattern="[0-9]{10}"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                {phoneError && <Form.Text className="text-danger">{phoneError}</Form.Text>}
              </Form.Group>

              <Form.Group controlId="formZipcode" className="mb-3">
                <Form.Label>Zipcode</Form.Label>
                <Form.Control
                  type="text"
                  pattern="[0-9]{5}"
                  placeholder="Enter your zipcode"
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                  required
                />
                {zipcodeError && <Form.Text className="text-danger">{zipcodeError}</Form.Text>}
              </Form.Group>

              <div className="d-flex justify-content-end">
                <Button variant="dark" type="submit">
                  Join
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
      <Row className="flex-fill">
        <Col className="d-flex justify-content-center">
          <Button variant="link" type="submit" style={{ color: "black", fontSize: "20px", fontWeight: "bold" }}>
            Sign-In
          </Button>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default SignUpForm;
