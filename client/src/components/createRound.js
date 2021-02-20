import React, { Component } from 'react';
import axios from 'axios';
import RoundForm from './form';

export default class CreateRound extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeCourse = this.onChangeCourse.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangePar = this.onChangePar.bind(this);
    this.onChangeScore = this.onChangeScore.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      course: '',
      type: '18 holes',
      par: null,
      score: null,
      date: new Date(),
      users: [],
    };
  }

  // Change name handler
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  // Change course handler
  onChangeCourse(e) {
    this.setState({
      course: e.target.value,
    });
  }

  // Change type handler
  onChangeType(e) {
    this.setState({
      type: e.target.value,
    });
  }

  // Changee par handler
  onChangePar(e) {
    this.setState({
      par: e.target.value,
    });
  }

  // Change score handler
  onChangeScore(e) {
    this.setState({
      score: e.target.value,
    });
  }

  // Change Date Handler
  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    // Define current round
    const round = {
      name: this.state.name,
      course: this.state.course,
      type: this.state.type,
      score: this.state.score,
      par: this.state.par,
      date: this.state.date,
    };

    // POST req to /add endpoint
    axios
      .post('http://localhost:5000/rounds/add', round)
      .then((res) => console.log(res.data));

    // redirect to homepage
    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Create New Round</h3>
        <RoundForm
          onSubmit={this.onSubmit}
          name={this.state.name}
          course={this.state.course}
          par={this.state.par}
          score={this.state.score}
          type={this.state.type}
          date={this.state.date}
          onChangeCourse={this.onChangeCourse}
          onChangeName={this.onChangeName}
          onChangePar={this.onChangePar}
          onChangeScore={this.onChangeScore}
          onChangeType={this.onChangeType}
          onChangeDate={this.onChangeDate}
        />
      </div>
    );
  }
}
