import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Details = ({ details }) => {
  console.log("details", details);
  const { image, rating, summary, status, language, type, name } =
    details?.show;
  return (
   <Container>
      <Row>
       <Col sm={12} md={8}>
       <img src={image?.original} alt="alt" />
       </Col>
       <Col sm={13} md={4}>
       <h4 className="" style={{fontSize:"30px"}}>{name}</h4>
      <p style={{fontSize:"20px"}}>{summary}</p>
       </Col>
    </Row>
   </Container>


  );
};

export default Details;
