import React, {useState} from 'react'
import { Form, Container, Card, Button } from "react-bootstrap";

function ImageControls() {
    const [image, setImage] = useState(
      "https://cdn4.iconfinder.com/data/icons/image-2/100/image-18-512.png"
    );

    const handleInput = event => {
        setImage(event.target.value);
    };
//     const uploadImage = () => {
    
//   };
  return (
    <div>
      <Container>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
        </Card>

        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label> Image of Item </Form.Label>
            <Form.Control onChange = {handleInput}type="text" placeholder="Upload Image" />
          </Form.Group>
        </Form>
      </Container>
    </div>

   
  );
}

export default ImageControls;
