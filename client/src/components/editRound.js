import React, { Component } from 'react';
import axios from 'axios';
import RoundForm from './form';

export default class EditRound extends Component {
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
      type: '',
      par: '',
      score: '',
      date: new Date(),
      users: [],
    };
  }

  componentDidMount() {
    // GET req to /rounds/:id endpoint
    axios
      .get('/rounds/' + this.props.match.params.id)
      // set form state to match round/:id state
      .then((response) => {
        this.setState({
          name: response.data.name,
          course: response.data.course,
          type: response.data.type,
          score: response.data.score,
          par: response.data.par,
          date: new Date(response.data.date),
        });
      })
      // catch errors
      .catch((err) => console.log(err));
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

  // Change par handler
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

  // Change Date handler
  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  // Submit handler
  onSubmit(e) {
    e.preventDefault();

    // define current round state
    const round = {
      name: this.state.name,
      course: this.state.course,
      type: this.state.type,
      score: this.state.score,
      par: this.state.par,
      date: this.state.date,
    };

    // PUT req to /update/:id endpoint
    axios
      .put(
        '/rounds/update/' + this.props.match.params.id,
        round
      )
      // Check out data
      .then((res) => console.log(res.data))
      // Catch errors
      .catch((err) => console.log(err));

    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Edit Round</h3>
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
