import React from "react";
import { Link } from "react-router-dom"
import DynamicTable from "./components/DynamicTable";
import { Container, Row, Col, Stack } from "react-bootstrap";
import TextControlsExample from "./components/TextInput";


import { useState } from 'react';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from 'react-bootstrap/ToggleButton';

import Accordion from 'react-bootstrap/Accordion';



import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function TB() {
  return (
    <Stack direction="horizontal" gap={1}>
      <Form.Control className="me-auto" placeholder="Add..." />
  
      <div className="vr" />
    </Stack>
  );
}


function TableAcc({ onAddRow }) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Add Friend</Accordion.Header>
        <Accordion.Body>
          <div>
            <Container>
              <Row>
                <Col xl={5}>
                  <DynamicTable
                    headers={[
                      "Friend",
                      "Item Currently Borrowed",
                      "Items Currently Lent",
                      "Best Friend",
                      "Submit",
                    ]}
                    data={[
                      [
                        <TB />,
                        "None",
                        "None",
                        <TBC value={6} />,
                        <Button variant="secondary">Submit</Button>,
                      ],
                    ]}
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}



function TBC({ value, onInputChange }) {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <ButtonGroup className="mb-2"></ButtonGroup>
      <ToggleButton
        id={`toggle-check-${value}`}
        type="checkbox"
        style={{ marginRight: "10px" }}
        variant="outline-primary"
        checked={checked}
        value="1"
        onChange={(e) => setChecked(e.currentTarget.checked)}
      >
        Yes
      </ToggleButton>

      <br />
    </>
  );
}


export const CommunityPage =() => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Link path to="/WelcomePage">
              <button>
                <img
                  src="https://th.bing.com/th/id/R.c57fe0969b74369fc0803b7630934ca8?rik=MKcE9R8nFWfxBw&pid=ImgRaw&r=0"
                  width="30"
                />
              </button>
            </Link>
            <h1 style={{ marginTop: "20px" }}>Manage Community</h1>
          </Col>
        </Row>

        <Row>
          <Col xl={12}>
            <DynamicTable
              headers={[
                "Friends",
                "Item Currently Borrowed",
                "Items Currently Lent",
                "Best Friend",
              ]}
              data={[
                ["Phil", "None", "None", <TBC value={0} />],
                ["Claira", "None", "None", <TBC value={1} />],
                ["Gloria", "None", "None", <TBC value={2} />],
              ]}
            />
            <button>
              <TableAcc />
            </button>

            <br />

            <div style={{ display: "flex", alignItems: "center" }}>
              <TBC value={3} />
              <p style={{ marginRight: "10px" }}>
                Text me when someone wants to borrow an item
              </p>
            </div>
            <br />
            <div style={{ display: "flex", alignItems: "center" }}>
              <TBC value={4} />
              <p style={{ marginRight: "10px" }}>
                Allow best friends to auto borrow without approval
              </p>
            </div>
            <br />
            <div style={{ display: "flex", alignItems: "center" }}>
              <TBC value={5} />
              <p style={{ marginRight: "10px" }}>
                Block friends of friends from seeing my items
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default CommunityPage;