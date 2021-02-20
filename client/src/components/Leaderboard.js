// Leaderboard row
const Leaderboard = (props) => (
  <div>
    <th>{props.round.name}</th>
    <th>{props.getScore(props.round.score, props.round.par)}</th>
    <th>{props.round.date.substring(0, 10)}</th>
  </div>
);

export default Leaderboard;
