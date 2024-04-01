import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import { useDispatch } from "react-redux";

const LeftForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const addItemList = () => {
    dispatch({type:"CREATE",payload:{name,phoneNumber}})
  };
  return (
    <div>
      <InputGroup className="name-area">
        <InputGroup.Text id="name-text">Name　　　　</InputGroup.Text>
        <Form.Control
          placeholder="Name"
          aria-label="Name"
          aria-describedby="basic-addon1"
          onChange={(event)=>setName(event.target.value)}
        />
      </InputGroup>
      <InputGroup className="phone-area">
        <InputGroup.Text id="phone-text">Phone Number</InputGroup.Text>
        <Form.Control
          placeholder="Phone Number"
          aria-label="Phone Number"
          aria-describedby="basic-addon1"
          onChange={(event)=>setPhoneNumber(event.target.value)}
        />
      </InputGroup>
      <div>
        <Button onClick={addItemList} variant="primary">
          Create
        </Button>{" "}
      </div>
    </div>
  );
};

export default LeftForm;
