import React from "react";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";


const ItemList = ({item}) => {
  
  return (
    <Row className="privacy-row">
      <Col lg={2}>
        <img
          className="human-img"
          src="https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-yellow-color-phone-contact-icon-image_1148167.jpg"
        />
      </Col>
      <Col lg={10} className="privacy">
        <div className="privacy-name">{item.name}</div>
        <div className="privacy-number">{item.phoneNumber}</div>
      </Col>
    </Row>
  );
};

export default ItemList;
