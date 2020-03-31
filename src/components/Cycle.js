import React from 'react';
import Countdown from 'react-countdown';
import NextRound from './NextRound';
import IterateEntries from './IterateEntries';
import { getEntries } from '../helpers';

class Cycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { entries: [] };
  }

  componentDidMount() {
    const entries = getEntries();
    entries.then(values => this.setState({ entries: values }));
  }

  render() {
    let { entries } = this.state;

    if (entries.length === 0) {
      return <h2>Loading the Salad Bowl…</h2>;
    } else {
      const renderer = ({ _hours, _minutes, seconds, completed }) => {
        if (completed) {
          if (this.state.entries.length === 0) {
            return <NextRound incrementRound={this.props.incrementRound} />;
          } else {
            return <p>another cycle</p>
          }
        } else {
          return <p style={timerStyle}>{seconds}</p>;
        }
      };

      return (
        <div>
          <IterateEntries entries={entries} />

          <Countdown
            key={Date.now()}
            date={Date.now() + 3000}
            renderer={renderer}
          />
        </div>
      );
    }
  }
};

const timerStyle = {
  margin: '0 auto',
  textAlign: 'center',
  fontSize: '50px'
};

export default Cycle;
