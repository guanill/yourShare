
import React from "react";
import {DynamicTable, DynamicTables} from "./components/DynamicTable";
import { Link } from "react-router-dom";
import {Container, Row, Col, Stack, Button } from "react-bootstrap";


export const WelcomePage = () => {

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 style={{ margin: "50px 0" }}>Welcome, [username]!</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <DynamicTable
              headers={["Items for Borrowing", "Lender"]}
              data={[
                ["Blender", "Angel"],
                ["Vacuum", "Diana"],
                ["Coffe Machine", "David"],
                ["Freezer", "Sarah"],
                ["Ice Cream Maker", "Jason"],
              ]}
            />
          </Col>
          <Col xs={6}>
            <Stack gap={3}>
              <DynamicTables
                headers={["Your Items", "Lent to"]}
                data={[
                  ["Add your item", "To a friend"]
                ]}
              />
              <Stack className="d-flex flex-column align-items-center" gap={3}>
                <Link to="/additem">
                  <Button>Add Item</Button>
                </Link>
                <Link to="/community">
                  <Button>Manage Community</Button>
                </Link>
              </Stack>
            </Stack>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WelcomePage;