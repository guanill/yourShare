import React from "react";
import TextControlsExample from "./components/TextInput";
import { Container, Row, Col, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import ImageControls from "./components/Image";

export const AddItemPage =() => {

  return (
    <div class="addItem_container">
      <Container>
        <Row>
          <Col xs={6}>
            <Link to="/WelcomePage">
              <button>
                <img
                  src="https://th.bing.com/th/id/R.c57fe0969b74369fc0803b7630934ca8?rik=MKcE9R8nFWfxBw&pid=ImgRaw&r=0"
                  width="30"
                  alt= "back"
                />
              </button>
            </Link>
            <h1>Add Item</h1>
            <div class="col-m-6">
              {TextControlsExample("Item", "text", "Item")}
              {TextControlsExample("Type", "text", "Type")}
              {TextControlsExample("Description", "text", "Description")}
            </div>
          </Col>
          <Col xs={6}>
            <div>
              {ImageControls()}
            </div>
            <Stack gap={3}>
              <Link to="/WelcomePage">
                <button class="">Cancel</button>
              </Link>
            </Stack>
            <Stack gap={3}>
              <Link to="/WelcomePage">
                <button class="">Add Item</button>
              </Link>
            </Stack>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default AddItemPage;