import './TmpCard.css';
import Card from 'react-bootstrap/Card';

//@ts-ignore
export default function TmpCard(props) {
  return (
    <Card style={{ width: '18rem' }} className="me-3 ms-3 mb-4">
      <Card.Img variant="top" src={props.imgSrc} />
      <Card.Body className="test-card">
        <Card.Title>{props.recipeTitle}</Card.Title>
        <Card.Text>
            Recipe ID: {props.recId}<br/>
            Ready in minutes: {props.readyInMin}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}