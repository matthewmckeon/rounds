import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Round Card Component
const Round = (props) => (
  <div>
    <Card.Header as='h5'>
      {props.round.name} shot a{' '}
      {props.getScore(props.round.score, props.round.par)}!
    </Card.Header>
    <Card.Body>
      <Card.Title>{props.round.course}</Card.Title>
      <Card.Text>
        Type: {props.round.type} | Par: {props.round.par} | Score:{' '}
        {props.round.score} | Date: {props.round.date.substring(0, 10)}
      </Card.Text>
      {/* <Button  variant='secondary'>Edit</Button> */}
      <Link to={'/edit/' + props.round._id}>edit</Link> |{' '}
      <a
        href='/'
        onClick={() => {
          props.deleteround(props.round._id);
        }}
      >
        delete
      </a>
    </Card.Body>
  </div>
);

export default Round;
