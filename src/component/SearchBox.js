import React from "react";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const SearchBox = () => {
  let [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();
  // let { item } = useSelector((state) => state);
  const searchItem = (event) => {
    dispatch({ type: "SEARCH", payload: { keyword } });
  }
  return (
    <Row className="search-area">
      <Col lg={8} className="search-box">
        <InputGroup className="search-input">
          <InputGroup.Text id="search-text">Search</InputGroup.Text>
          <Form.Control
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon1"
            onChange={(event) => setKeyword(event.target.value)}
          />
        </InputGroup>
      </Col>

      <Col lg={4} className="search-btn-container">
        <Button onClick={searchItem} className="search-btn" variant="primary">Search</Button>{" "}
      </Col>
    </Row>
  );
};

export default SearchBox;
