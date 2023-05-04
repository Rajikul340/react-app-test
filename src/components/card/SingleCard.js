import Link from "next/link";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function SingleCard({ item, index }) {
  // console.log("data", typeof item.score);

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
          <p>{item.show.premiered}</p>
        </Card.Body>
        <Link href={`/summary/${item.score}`}>
          <Button variant="primary">details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default SingleCard;
