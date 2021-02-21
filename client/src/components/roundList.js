import React, { Component } from 'react';
import { Card, Container, Row, Col, Table } from 'react-bootstrap';
import axios from 'axios';

import Leaderboard from './Leaderboard';
import Round from './Round';

export default class RoundList extends Component {
  constructor(props) {
    super(props);

    this.getScore = this.getScore.bind(this);
    this.deleteround = this.deleteround.bind(this);

    this.state = { rounds: [] };
  }

  // On mount -> GET request & set state of rounds array
  componentDidMount() {
    axios
      .get('/rounds/')
      .then((response) => {
        this.setState({ rounds: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // DELETE request @ rounds/:id
  // Update rounds array state by filtering out round['id']
  deleteround(id) {
    axios.delete('/rounds/' + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      rounds: this.state.rounds.filter((el) => el._id !== id),
    });
  }

  // Map over rounds array and put each round on a card
  roundList() {
    let reversedRounds = this.state.rounds.reverse();
    return reversedRounds.map((currentround) => {
      return (
        <div className='outer-card'>
          <div className='card'>
            <Card>
              <Round
                count={this.state.count}
                round={currentround}
                deleteround={this.deleteround}
                getScore={this.getScore}
                key={currentround._id}
              />
            </Card>
          </div>
          <br />
        </div>
      );
    });
  }

  // Compare method for sorting array by score
  compareScore(a, b) {
    if (a.score - a.par > b.score - b.par) return 1;
    if (a.score - a.par < b.score - b.par) return -1;
    return 0;
  }

  // sort by score and map over rounds array
  getLeaders() {
    return this.state.rounds.sort(this.compareScore).map((currentround) => {
      return (
        <Leaderboard
          round={currentround}
          key={currentround._id}
          getScore={this.getScore}
          incrementCount={this.incrementCount}
        />
      );
    });
  }

  // Get total score
  getScore(score, par) {
    const total = score - par;
    if (total > 0) return `+${total}`;
    return total;
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm={8}>
              <div>
                <h1>Recent Rounds</h1>
                {this.roundList()}
              </div>
            </Col>
            <Col sm={4} style={{ paddingTop: '5%' }}>
              <Card>
                <h1>Leaderboard</h1>
                <Table>
                  <tbody>
                    <tr>{this.getLeaders()}</tr>
                  </tbody>
                </Table>
              </Card>
            </Col>
          </Row>
        </Container>
        <footer>
          <p style={{ textAlign: 'right', padding: '0.5em' }}>
            Matt McKeon 2021
          </p>
        </footer>
      </div>
    );
  }
}
