import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Details = ({ details, handleAddToCart }) => {
  // console.log("details", details);
  const { image, rating, summary, status, language, type, name } =
    details?.show;
 
  return (
   <Container>
      <Row>
       <Col sm={12} md={8}>
       <img src={image?.original} alt="alt" style={{width:"80%"}} />
       </Col>
       <Col sm={13} md={4}>
       <h4 className="" style={{fontSize:"30px"}}>{name}</h4>
      <p style={{fontSize:"20px"}}>{summary}</p>
      
         <button onClick={()=>handleAddToCart(details)} className="btn btn-primary">whitList</button>
       </Col>
    </Row>
     
   </Container>


  );
};

export default Details;
