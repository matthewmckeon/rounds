import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Form component
const RoundForm = (props) => {
  return (
    <div>
      <Form onSubmit={props.onSubmit}>
        <Form.Group controlId='formBasicName'>
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type='text'
            placeholder='Tiger Woods'
            value={props.name}
            onChange={props.onChangeName}
          />
        </Form.Group>

        <Form.Group controlId='formBasicCourse'>
          <Form.Label>Course:</Form.Label>
          <Form.Control
            type='text'
            placeholder='Pebble Beach'
            value={props.course}
            onChange={props.onChangeCourse}
          />
        </Form.Group>

        <Form.Group controlId='formBasicPar'>
          <Form.Label>Par:</Form.Label>
          <Form.Control
            placeholder='72'
            type='number'
            value={props.par}
            onChange={props.onChangePar}
          />
        </Form.Group>

        <Form.Group controlId='formBasicScore'>
          <Form.Label>Score:</Form.Label>
          <Form.Control
            placeholder='72'
            type='number'
            value={props.score}
            onChange={props.onChangeScore}
          />
        </Form.Group>

        <Form.Group controlId='formBasicType'>
          <Form.Label>Type:</Form.Label>
          <br />
          <Form.Check
            inline
            type='radio'
            label='18 holes'
            value='18 holes'
            checked={props.type === '18 holes'}
            onChange={props.onChangeType}
          />
          <Form.Check
            inline
            type='radio'
            label='Front 9'
            value='Front 9'
            checked={props.type === 'Front 9'}
            onChange={props.onChangeType}
          />
          <Form.Check
            inline
            type='radio'
            label='Back 9'
            value='Back 9'
            checked={props.type === 'Back 9'}
            onChange={props.onChangeType}
          />
        </Form.Group>

        <Form.Group controlId='formBasicDate'>
          <Form.Label>Date:</Form.Label>
          <br />
          <Datepicker selected={props.date} onChange={props.onChangeDate} />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default RoundForm;
