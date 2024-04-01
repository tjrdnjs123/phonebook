import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import LeftForm from "./component/LeftForm";
import RightForm from "./component/RightForm";

//1. 왼쪽에는 연락처 등록하는 폼이, 오른쪽에는 리스트와 search창이 있다
//2. 리스트에 유저 이름과 전화번호를 추가할 수 있다.
//3. 리스트에 아이템이 몇개있는지 보인다.
//4. 사용자가 유저를 이름검색으로 찾을 수 있다
function App() {
  
  return (
    <div>
      <div className="title">
        <h1>Phone Book</h1>
      </div>
      <Container fluid>
        <div className="main-container-area">
          <Row className="main-container">
            <Col lg={6} className="left-container">
              <LeftForm/>
            </Col>

            <Col lg={6} className="right-container">

              <RightForm/>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default App;
