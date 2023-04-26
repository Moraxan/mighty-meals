import './TmpCard.css';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

//@ts-ignore
export default function TmpCardMTVMH(props) {
  return (
    <Link to={`recipe/${props.recId}`} style={{textDecoration:"none"}} onClick={() => {props.persistSearchData()}}>
      <Card style={{ width: '24rem', height: '14rem' }} className="me-4 ms-4 mb-4">
        <Card.Body className="d-flex flex-column justify-content-between test-card" style={{backgroundImage: `url(${props.imgSrc})`}}>
          <Card.Title className="testcard-text">{props.recipeTitle}</Card.Title>
          <Card.Text className="testcard-text">
              Recipe ID: {props.recId}<br/>
              Used ingredient: {props.usedIngredientCount}<br/>
              Missed ingredients: {props.missedIngredientCount}
          </Card.Text>
        </Card.Body>
    </Card>
    </Link>
  );
}