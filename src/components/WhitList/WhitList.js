import React from "react";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const WhitList = ({ item, handleDetails }) => {
  // console.log('white list details', item);

  return (
    <Card className="m-2">
      <Card.Img variant="top" src={item?.show?.image?.medium} />
      <Card.Body>
        <Card.Title>{item?.show.name}</Card.Title>
        <Card.Body className="d-flex mr-4">
          <Card.Text>
            <strong>status:</strong> {item?.show?.status}
          </Card.Text>
          <Card.Text>
            <strong>language:</strong> {item?.show?.language}
          </Card.Text>
        </Card.Body>

        <Button onClick={() => handleDetails(item.score)} variant="primary">
          delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default WhitList;
