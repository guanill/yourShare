import React, { useState } from "react";
import { Form, Container } from 'react-bootstrap';



function TextControlsExample(label, control, placeholder) {
    // const [text, setText] = useState(
    //   ""
    // );

    // const handleInput = (event) => {
    //   setText(event.target.value);
    // };
  return (
    <div>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label> {label} </Form.Label>
            <Form.Control
            //   onChange={handleInput}
              type={control}
              placeholder={placeholder}
            />
          </Form.Group>
        </Form>
        {/* <div><p>{text}</p></div> */}
      </Container>
    </div>

    // <Form.Group className="mb-3" controlId="Item Name">
    //         <Form.Label>Type: </Form.Label>
    //         <Form.Control type="text" placeholder="Type" />
    //     </Form.Group>
    //     <Form.Group className="mb-3" controlId="Description">
    //         <Form.Label>Description: </Form.Label>
    //         <Form.Control as="textarea" rows={3} />
    //     </Form.Group>
  );
}

export default TextControlsExample;
